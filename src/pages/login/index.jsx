import React from "react";
import { Form, Input, Button, Checkbox, Flex, Card } from "antd";
import Link from "next/link";
import styles from "@/styles/login/Login.module.css";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { loginUser } from "@/redux/actions/userAction";
import { withRouter } from "next/router";
import Image from "next/image";
import CardWrapper from "@/components/cardWrapper";
import FormField from "@/components/formField";
import FormButton from "@/components/formButton";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: false,
    };
  }

  handleLogin = async (values) => {
    // const { email, password, rememberMe } = this.state;
    // const body = { email, password, rememberMe };
    const body = {
      email: values.email,
      password: values.password,
      rememberMe: values.remember,
    };
    const result = await this.props.loginUser(body);
    console.log("RESULT LOGIN FORM", result);

    if (result.success) {
      this.setState({ email: "", password: "" });
      this.props.notificationApi.success({
        message: "Login success",
        description: "Welcome back",
      });
      this.props.router.push("/");
    } else {
      this.props.notificationApi.error({
        message: "Login failed",
        description: result.message?.message || result.message,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChecked = (e) => {
    this.setState({ rememberMe: e.target.checked });
  };

  render() {
    return (
      <CardWrapper title="Login">
        <Form
          name="login"
          initialValues={{ remember: false }}
          style={{ maxWidth: 360 }}
          onFinish={this.handleLogin}
        >
          <FormField
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Email is not valid!" },
            ]}
            prefix={<MailOutlined />}
            placeholder="Email"
            onChange={this.handleChange}
            // value={this.state.email}
          />

          <FormField
            name="password"
            // value={this.state.password}
            rules={[
              { required: true, message: "Please input your password" },
              {
                min: 8,
                message: "Password must be at least 8 characters!",
              },
            ]}
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />

          <FormField
            name="remember"
            // checked={this.state.rememberMe}
            type="checkbox"
            placeholder="Remember me"
            onChange={this.handleChecked}
          />

          <FormButton
            title="Login"
            linkHref="/register"
            extraText="Don't have an account?"
            linkText="Register now!"
            // onClick={this.handleLogin}
          />
        </Form>
      </CardWrapper>
    );
  }
}

export default connect(null, { loginUser })(withRouter(LoginPage));

// render() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.overlay}></div>
//       <Card className={styles.card} title="Login">
//         <Form
//           name="login"
//           initialValues={{ remember: false }}
//           style={{ maxWidth: 360 }}
//           onFinish={this.handleLogin}
//         >
//           <Form.Item
//             name="email"
//             rules={[
//               { required: true, message: "Please input your email" },
//               { type: "email", message: "Email is not valid!" },
//             ]}
//           >
//             <Input
//               prefix={<UserOutlined />}
//               type="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[
//               { required: true, message: "Please input your password!" },
//               { min: 8, message: "Password must be at least 8 characters!" },
//             ]}
//           >
//             <Input.Password
//               prefix={<LockOutlined />}
//               type="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={(a) => this.setState({ password: a.target.value })}
//             />
//           </Form.Item>

//           <Form.Item>
//             <Flex justify="space-between" align="center">
//               <Form.Item name="remember" valuePropName="checked" noStyle>
//                 <Checkbox
//                   checked={this.state.rememberMe}
//                   onChange={(e) =>
//                     this.setState({ rememberMe: e.target.checked })
//                   }
//                 >
//                   Remember me
//                 </Checkbox>
//               </Form.Item>
//               <Link href="" className={styles.link}>
//                 Forgot password
//               </Link>
//             </Flex>
//           </Form.Item>
//           <Form.Item>
//             <Button block type="primary" htmlType="submit">
//               Log in
//             </Button>
//             Don’t have an account?{" "}
//             <Link href="/register" className={styles.link}>
//               Register now!
//             </Link>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// }
