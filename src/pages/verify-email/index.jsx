import { resendToken, verifyEmail } from "@/redux/actions/userAction";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { connect } from "react-redux";

class VerifyEmailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVerified: false,
      email: "",
      resendMessage: "",
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
      this.setState({ isVerified: true, email: result.data.email });
    }
  };

  handleResendToken = async () => {
    try {
      const { email } = this.state;
      console.log("EMAIL STATE", this.state.email);

      const result = await this.props.resendToken(email);

      if (result.success) {
        this.setState({ resendMessage: "Token baru sudah dikirim ke email!" });
      } else {
        this.setState({ resendMessage: "Gagal kirim ulang token." });
      }
    } catch (err) {
      console.error(err);
      this.setState({ resendMessage: "Terjadi kesalahan." });
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
    const { resendMessage } = this.state;
    return (
      <div>
        <h1>Email Not Verified</h1>
        <Button onClick={() => this.handleResendToken()}>Resend Email</Button>
        {resendMessage && <p>{resendMessage}</p>}
      </div>
    );
  }

  render() {
    const { isVerified } = this.state;
    return (
      <div style={{ padding: "100px 20px" }}>
        {isVerified ? this.renderVerified() : this.renderNotVerified()}
      </div>
    );
  }
}

export default connect(null, { verifyEmail, resendToken })(VerifyEmailPage);
