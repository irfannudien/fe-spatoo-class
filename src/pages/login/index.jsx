import React from "react";
import { Form, Input, Button, Card, Checkbox, Flex } from "antd";
import Link from "next/link";
import styles from "../../styles/login/Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log("Success:", values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className={styles.container}>
        <Card className={styles.card} title="Login">
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link href="" className={styles.link}>
                  Forgot password
                </Link>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
              or{" "}
              <Link href="/register" className={styles.link}>
                Register now!
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
