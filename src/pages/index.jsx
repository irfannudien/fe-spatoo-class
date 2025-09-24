import React from "react";
import NewsletterBlocks from "@/blocks/newsletterBlocks";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Homepage</h1>
        <NewsletterBlocks />
      </div>
    );
  }
}

export default Homepage;
