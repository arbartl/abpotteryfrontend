import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  CartTitle,
  CartContents,
  Card,
  CardDetails,
  EmptyStyle,
  Subtotal,
  Cards,
} from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import getStripe from "../lib/getStripe";
import { useEffect } from "react";

// Animation Variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

function Cart() {
  const { cartItems, setShowCart, onRemove, onAdd, cartSubtotal } =
    useStateContext();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    console.log(data);
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <CartTitle>
          <h3>Your Cart</h3>
        </CartTitle>
        <CartContents>
          {cartItems.length < 1 && (
            <EmptyStyle>
              <h1>Your Cart is Empty</h1>
              <FaShoppingCart />
            </EmptyStyle>
          )}
          <Cards layout variants={cards} initial="hidden" animate="show">
            {cartItems.length >= 1 &&
              cartItems.map((item) => {
                return (
                  <Card layout variants={card} key={item.slug}>
                    <img
                      src={item.image.data.attributes.formats.thumbnail.url}
                      alt={item.name}
                    />
                    <CardDetails>
                      <h2>{item.name}</h2>
                      <h3>${item.price}</h3>
                      <Quantity>
                        <button
                          onClick={() => {
                            if (item.quantity === 1) {
                              onRemove(item);
                            } else {
                              onAdd(item, -1);
                            }
                          }}
                        >
                          <AiOutlineMinus />
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => onAdd(item, 1)}>
                          <AiOutlinePlus />
                        </button>
                      </Quantity>
                    </CardDetails>
                    <button onClick={() => onRemove(item)}>
                      <AiFillDelete />
                    </button>
                  </Card>
                );
              })}
          </Cards>
          {cartItems.length >= 1 && (
            <Subtotal
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              layout
            >
              <div>Cart Subtotal: ${cartSubtotal().toFixed(2)}</div>
              <button onClick={handleCheckout}>Checkout</button>
            </Subtotal>
          )}
        </CartContents>
      </CartStyle>
    </CartWrapper>
  );
}

export default Cart;
