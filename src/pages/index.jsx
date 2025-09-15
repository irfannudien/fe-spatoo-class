import React from "react";
import NewsletterBlocks from "@/blocks/newsletterBlocks";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Homepage</h1>
        <NewsletterBlocks />
        {/* <div style={{ width: "30%" }}>
          <Input placeholder="Email" prefix={<UserOutlined />} />
          <Input.Password />
          <Button type="primary">Sign in</Button>
        </div> */}
      </div>
    );
  }
}

export default Homepage;
