import React from "react";
import { Button } from "antd";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  handleSwitch = () => {
    const { isDarkMode } = this.state;

    if (isDarkMode) {
      this.setState({ isDarkMode: false });
    } else {
      this.setState({ isDarkMode: true });
    }
  };

  renderLightMode() {
    return (
      <div style={{ backgroundColor: "white", color: "black" }}>
        <h1 style={{ color: "#000000" }}>Light mode</h1>
        <Button onClick={this.handleSwitch}>Dark Mode</Button>
      </div>
    );
  }

  renderDarkMode() {
    return (
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ color: "#ffffff" }}>Light mode</h1>
        <Button onClick={this.handleSwitch}>Light Mode</Button>
      </div>
    );
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <>
        <div>{isDarkMode ? this.renderDarkMode() : this.renderLightMode()}</div>
      </>
    );
  }
}

export default ContactPage;
