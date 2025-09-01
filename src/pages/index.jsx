import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
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
