import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StateContext } from "../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0";
import { Toaster } from "react-hot-toast";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
