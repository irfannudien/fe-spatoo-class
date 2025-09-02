import { Button, Input } from "antd";
import React from "react";
import { connect } from "react-redux";
import { newsletterAction } from "@/redux/actions/newsletterAction";
import { getProductData } from "@/redux/actions/productAction";

class NewsletterBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  componentDidMount() {
    this.props.getProductData();
  }

  handleSubmitSubscriber = async () => {
    const { email } = this.state;

    if (!email) {
      alert("Please fullfill the email");
      return;
    }

    const body = { email };
    const result = await this.props.newsletterAction(body);
    if (result.success) {
      this.setState({ email: "" });
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          type="email"
          placeholder="Your email"
        />
        <Button onClick={this.handleSubmitSubscriber}>Subscriber</Button>
      </div>
    );
  }
}

export default connect(null, { newsletterAction, getProductData })(
  NewsletterBlocks
);
