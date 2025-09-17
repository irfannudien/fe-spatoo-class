import { verifyEmail } from "@/redux/actions/userAction";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

class VerifyEmailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: false,
    };
  }

  handleVerification = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get("token");
    console.log("TOKEN PARAMS", token);

    const result = await this.props.verifyEmail(token);

    console.log("RESULT TOKEN", result);

    if (result.success) {
      this.setState({ isVerified: true });
    }
  };

  componentDidMount() {
    this.handleVerification();
  }

  renderVerified() {
    return (
      <div>
        <h1>Email Verified</h1>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    );
  }

  renderNotVerified() {
    return (
      <div>
        <h1>Email Not Verified</h1>
        <Button>Resend Email</Button>
      </div>
    );
  }

  render() {
    const { isVerified } = this.state;
    return <>{isVerified ? this.renderVerified() : this.renderNotVerified()}</>;
  }
}

export default connect(null, { verifyEmail })(VerifyEmailPage);
