import React from "react";
import { Form, Input, Button, Card, Checkbox, Flex } from "antd";
import Link from "next/link";
import styles from "../../styles/login/Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { loginUser } from "@/redux/actions/userAction";
import { withRouter } from "next/router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: true,
    };
  }

  handleLogin = async () => {
    const { email, password, rememberMe } = this.state;

    if (!password || !email) {
      alert("Please fill full field");
      return;
    }

    const body = { email, password, rememberMe };
    const result = await this.props.loginUser(body);
    console.log("RESULT LOGIN FORM", result);

    if (result.success) {
      this.setState({ email: "", password: "" });
      this.props.router.push("/");
    } else {
      alert(result.message.message);
    }
  };

  // onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  render() {
    return (
      <div className={styles.container}>
        <Card className={styles.card} title="Login">
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            // onFinish={this.onFinish}
          >
            <Form.Item
              name="email"
              // rules={[{ required: true, message: "Please input your email" }]}
            >
              <Input
                prefix={<UserOutlined />}
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Form.Item>

            <Form.Item
              name="password"
              // rules={[
              //   { required: true, message: "Please input your password!" },
              // ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(a) => this.setState({ password: a.target.value })}
              />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox
                    checked={this.state.rememberMe}
                    onChange={(e) =>
                      this.setState({ rememberMe: e.target.checked })
                    }
                  >
                    Remember me
                  </Checkbox>
                </Form.Item>
                <Link href="" className={styles.link}>
                  Forgot password
                </Link>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                onClick={this.handleLogin}
              >
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

export default connect(null, { loginUser })(withRouter(Login));
