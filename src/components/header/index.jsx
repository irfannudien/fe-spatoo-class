import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header } = Layout;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = [
      {
        key: "home",
        label: (
          <Link href="/" style={{ color: "white" }}>
            Home
          </Link>
        ),
      },
      {
        key: "about",
        label: (
          <Link href="/about-us" style={{ color: "white" }}>
            About
          </Link>
        ),
      },
      // {
      //   key: "products",
      //   label: <Link href="/products">Products</Link>,
      // },
      // {
      //   key: "contact",
      //   label: <Link href="/contact">Contact</Link>,
      // },
    ];

    return (
      <Header
        theme="light"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="logo"
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Logo
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            items={items}
            style={{
              background: "transparent",
              borderBottom: "none",
              color: "white",
            }}
          />
          <div
            className="logo"
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Logo
          </div>
        </div>
      </Header>
    );
  }
}

export default HeaderComponent;
