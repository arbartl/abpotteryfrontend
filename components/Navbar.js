import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { useStateContext } from "../lib/context";
import {
  NavbarStyles,
  NavItems,
  NavLinks,
  PageLinks,
  Social,
  CartIcon,
} from "../styles/NavbarStyles";
import Cart from "./Cart";
import User from "./User";
import { useUser } from "@auth0/nextjs-auth0";

const { AnimatePresence, motion } = require("framer-motion");

function Navbar() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  const { user, error, isLoading } = useUser();

  return (
    <NavbarStyles>
      <Link href={"/"}>
        <img
          src={
            "https://res.cloudinary.com/abpottery/image/upload/v1655771339/Transparent_logo_with_name_2_gxm5d5.png"
          }
          alt="Alex Broussard Pottery Logo"
          className={"logo"}
        />
      </Link>
      <NavLinks>
        <PageLinks>
          <Link href={"/about"}>About Me</Link>
          <Link href={"/store"}>Products</Link>
        </PageLinks>
        <NavItems>
          <User />
          <CartIcon onClick={() => setShowCart(true)}>
            {totalQuantity > 0 && (
              <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
                {totalQuantity}
              </motion.span>
            )}
            <FiShoppingBag />
            <h3>Cart</h3>
          </CartIcon>
          <a
            target="_blank"
            href="https://instagram.com/alexbroussardpottery/"
            rel="noopener noreferrer"
          >
            <Social>
              <AiOutlineInstagram />
              <h3>Social</h3>
            </Social>
          </a>
        </NavItems>
      </NavLinks>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavbarStyles>
  );
}

export default Navbar;
