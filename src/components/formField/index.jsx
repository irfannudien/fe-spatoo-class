import { Checkbox, Flex, Form, Input } from "antd";
import Link from "next/link";
import React from "react";

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      name,
      value,
      rules,
      onChange,
      prefix,
      type = "text",
      confirmPassword = false,
      placeholder,
      checked,
      hasFeedback,
    } = this.props;

    if (type === "checkbox") {
      return (
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name={name} valuePropName="checked" noStyle>
              <Checkbox checked={checked} onChange={onChange}>
                {placeholder}
              </Checkbox>
            </Form.Item>
            <Link href="" style={{ color: "#1890ff" }}>
              Forgot password
            </Link>
          </Flex>
        </Form.Item>
      );
    }

    if (confirmPassword) {
      return (
        <Form.Item
          name={name}
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
            name={name}
            prefix={prefix}
            placeholder={placeholder}
            onChange={onChange}
            // value={value}
          />
        </Form.Item>
      );
    }
    return (
      <Form.Item name={name} rules={rules} hasFeedback={hasFeedback}>
        {type === "password" ? (
          <Input.Password
            name={name}
            prefix={prefix}
            placeholder={placeholder}
            onChange={onChange}
            // value={value}
          />
        ) : (
          <Input
            name={name}
            prefix={prefix}
            placeholder={placeholder}
            onChange={onChange}
            // value={value}
          />
        )}
      </Form.Item>
    );
  }
}

export default FormField;
