import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import {
  Order,
  OrdersWrapper,
  UserDetails,
  LogoutButton,
} from "../styles/ProfileStyles";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

function Profile({ user, orders }) {
  const route = useRouter();
  console.log(orders);

  return (
    user && (
      <div>
        <UserDetails>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </UserDetails>
        <OrdersWrapper>
          <h2>Order History</h2>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1>Order Number: {order.id}</h1>
              <h2>Order Amount: {formatMoney(order.amount)}</h2>
              <h2>Receipt Email: {order.receipt_email}</h2>
            </Order>
          ))}
        </OrdersWrapper>
        <LogoutButton onClick={() => route.push("/api/auth/logout")}>
          Logout
        </LogoutButton>
      </div>
    )
  );
}

export default Profile;
