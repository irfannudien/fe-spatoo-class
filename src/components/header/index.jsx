"use client";

import React from "react";
import Link from "next/link";
import { Layout, Menu, Typography } from "antd";
import { withRouter } from "next/router";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollBlur);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollBlur);
  }

  handleScrollBlur = () => {
    this.setState({ isScrolled: window.scrollY > 50 });
  };

  render() {
    const { isScrolled } = this.state;
    const { router } = this.props;

    const isPolicyPage =
      router.pathname === "/privacy-policy" ||
      router.pathname === "/terms-of-services" ||
      router.pathname === "/";

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: "1.5rem 0",
          transition: "all 0.3s ease",
          backgroundColor: isPolicyPage
            ? "rgba(0,0,0,.5)"
            : isScrolled
            ? "rgba(0,0,0,0.4)"
            : "rgba(0,0,0,0)",
          backdropFilter: isPolicyPage
            ? "none"
            : isScrolled
            ? "blur(10px)"
            : "none",
          WebkitBackdropFilter: isPolicyPage
            ? "none"
            : isScrolled
            ? "blur(10px)"
            : "none",
        }}
      >
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Logo</div>

          <div
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              href="/about-us"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              href="/faq"
              style={{ color: "white", textDecoration: "none" }}
            >
              FAQ
            </Link>
            <Link
              href="/privacy-policy"
              style={{ color: "white", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-services"
              style={{ color: "white", textDecoration: "none" }}
            >
              Terms of Services
            </Link>
          </div>

          <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderComponent);
