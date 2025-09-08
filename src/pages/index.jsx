import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import NewsletterBlocks from "@/blocks/newsletterBlocks";
import EditUserForm from "@/blocks/userBlocks";

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
        <EditUserForm />
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
