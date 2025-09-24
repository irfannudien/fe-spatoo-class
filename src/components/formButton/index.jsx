import { Button, Form } from "antd";
import Link from "next/link";
import React from "react";

class FormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      title,
      type = "primary",
      extraText,
      linkText,
      linkHref,
      onClick,
    } = this.props;
    return (
      <Form.Item>
        <Button block type={type} onClick={onClick}>
          {title}
        </Button>

        {extraText && linkText && linkHref && (
          <div style={{ marginTop: 8 }}>
            {extraText}{" "}
            <Link href={linkHref} style={{ color: "#1890ff" }}>
              {linkText}
            </Link>
          </div>
        )}
      </Form.Item>
    );
  }
}

export default FormButton;
