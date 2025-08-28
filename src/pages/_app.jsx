import React from "react";
import "@/styles/globals.css";
import { globalStore } from "@/redux/store";
import { Provider } from "react-redux";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={globalStore}>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </Provider>
  );
}

export default MyApp;

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
