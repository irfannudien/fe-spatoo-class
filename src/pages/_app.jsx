import React from "react";
import "@/styles/globals.css";
import { globalStore } from "@/redux/store";
import { Provider } from "react-redux";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { ConfigProvider, App as AntdApp, notification } from "antd";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [notificationApi, contextHolder] = notification.useNotification();
  const router = useRouter();

  const showFooterAndHeader =
    router.pathname === "/login" || router.pathname === "/register";

  return (
    <Provider store={globalStore}>
      <ConfigProvider>
        <AntdApp>
          {contextHolder}
          {!showFooterAndHeader && <HeaderComponent />}
          <Component {...pageProps} notificationApi={notificationApi} />
          {!showFooterAndHeader && <FooterComponent />}
        </AntdApp>
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
