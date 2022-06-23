import { useRouter } from "next/router";
import { SuccessWrapper, Card, OrderSummary } from "../styles/SuccessStyles";
import formatMoney from "../lib/formatMoney";
import { useEffect } from "react";
import { useStateContext } from "../lib/context";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

function Success({ order }) {
  const route = useRouter();
  const { address } = order.customer_details;
  const { cartItems, setCartItems } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, []);

  return (
    <SuccessWrapper>
      <Card>
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h2>{order.customer_details.email}</h2>
        <Card>
          <h3>Address</h3>
          <p>{address.line1}</p>
          {address.line2 && <p>address.line2</p>}
          <p>
            {address.city}, {address.state} {address.postal_code}
          </p>
        </Card>
        <Card>
          <h3>Order Summary</h3>
          <OrderSummary>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.line_items.data.map((item) => (
                <tr key={item.description}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{formatMoney(item.price.unit_amount)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Subtotal</td>
                <td>{formatMoney(order.amount_subtotal)}</td>
              </tr>
              <tr>
                <td></td>
                <td>Discount</td>
                <td>{formatMoney(order.total_details.amount_discount)}</td>
              </tr>
              <tr>
                <td></td>
                <td>Shipping</td>
                <td>{formatMoney(order.total_details.amount_shipping)}</td>
              </tr>
              <tr>
                <td></td>
                <td>Taxes</td>
                <td>{formatMoney(order.total_details.amount_tax)}</td>
              </tr>
              <tr>
                <td></td>
                <td>Order Total</td>
                <td>{formatMoney(order.amount_total)}</td>
              </tr>
            </tfoot>
          </OrderSummary>
        </Card>
        <button onClick={() => route.push("/store")}>Continue Shopping</button>
      </Card>
    </SuccessWrapper>
  );
}

export default Success;
