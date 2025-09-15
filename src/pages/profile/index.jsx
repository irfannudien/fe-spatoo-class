import React from "react";
import UserProfile from "@/blocks/userBlocks";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserProfile notificationApi={this.props.notificationApi} />
      </div>
    );
  }
}

export default ProfilePage;
