"use client";

import React from "react";
import Link from "next/link";
import { Layout, Menu, Typography } from "antd";

const { Header } = Layout;
const { Text } = Typography;

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          padding: "1rem 0",
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

          <div style={{ fontWeight: "bold" }}>Logo</div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
