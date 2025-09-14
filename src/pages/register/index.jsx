import React from "react";
import styles from "@/styles/login/Login.module.css";
import { Button, Card, Form, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { connect } from "react-redux";
import { registerUser } from "@/redux/actions/userAction";
import { withRouter } from "next/router";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    };
  }

  handleRegister = async () => {
    const { name, email, phone_number, password } = this.state;

    const body = { name, email, phone_number, password };
    const res = await this.props.registerUser(body);
    console.log("RESULT DATA REGISTER", res);

    if (res.success) {
      this.setState({
        name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: "",
      });

      this.props.notificationApi.success({
        message: "Register",
        description: "Register success, please login",
      });

      this.props.router.push("/login");
    } else {
      this.props.notificationApi.error({
        message: "Login",
        description: res.message?.message || res.message,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <Card className={styles.card} title="Register">
          <Form
            name="register"
            style={{ maxWidth: 360 }}
            onFinish={this.handleRegister}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                name="name"
                prefix={<UserOutlined />}
                placeholder="Name"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input
                name="email"
                prefix={<MailOutlined />}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="phone_number"
              rules={[
                { required: true, message: "Phone number is required" },
                {
                  pattern: /^\d{8,15}$/,
                  message: "Phone number must be 8-15 digits",
                },
              ]}
            >
              <Input
                name="phone_number"
                prefix={<PhoneOutlined />}
                placeholder="Phone number"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Password is required" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
              hasFeedback
            >
              <Input.Password
                name="password"
                prefix={<LockOutlined />}
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item
              name="confirm_password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Confirm password is required" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("Password do not match"));
                    }
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                name="confirm_password"
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
              Already have an account?{" "}
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default connect(null, { registerUser })(withRouter(RegisterPage));
