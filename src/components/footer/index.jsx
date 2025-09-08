import NewsletterBlocks from "@/blocks/newsletterBlocks";
import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* <NewsletterBlocks /> */}
        <Footer
          style={{
            textAlign: "center",
            padding: "12px 8px",
            background: "transparent",
            color: "#666",
          }}
        >
          <span>© 2025 - All rights reserved.</span>
        </Footer>
      </>
    );
  }
}

export default FooterComponent;
