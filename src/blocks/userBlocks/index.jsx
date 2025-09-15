import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { getUserById, editUserData } from "@/redux/actions/userAction";
import { jwtDecode } from "jwt-decode";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  // ======= GET USER DATA ========
  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const decode = jwtDecode(token);
      const userId = decode.id;

      console.log("JWT DECODE", decode);

      const result = await this.props.getUserById(userId);

      console.log("ISI RESULT.DATA getuserbyid", result.data);

      if (result.success) {
        this.setState({ userData: result.data });
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.log("Token decode error", err);
    }
  }

  handleUpdate = async (values) => {
    const { userData } = this.state;
    const userId = userData.users_id;

    const updatedUserData = {
      name: values.name,
      email: values.email,
    };

    const updatedProfileData = {
      phone_number: values.phone_number,
      address: values.address,
      city: values.city,
      country: values.country,
      profile_picture: values.profile_picture,
      zip_code: values.zip_code,
    };

    const result = await this.props.editUserData(userId, {
      updatedUserData,
      updatedProfileData,
    });

    console.log("DATA SEND:", {
      updatedUserData,
      updatedProfileData,
    });

    console.log("Response from BE", result.data);

    if (result.success) {
      this.setState({
        userData: { ...userData, ...updatedUserData, ...updatedProfileData },
      });
      this.props.notificationApi.success({
        mesage: "Success",
        description: "User update successfully!",
      });
    } else {
      this.props.notificationApi.error({
        message: "Failed",
        description: result.message,
      });
    }
  };

  render() {
    const { userData } = this.state;

    if (!userData) return <p>Loading...</p>;

    return (
      <Form
        key={userData.id}
        initialValues={{
          ...userData,
          // name: userData.name,
          // email: userData.email,
          // phone_number: userData.phone_number,
          // address: userData.address,
          // city: userData.city,
          // zip_code: userData.zip_code,
        }}
        // layout="vertical"
        onFinish={this.handleUpdate}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="phone_number"
          label="Phone number"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="city" label="City">
          <Input />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <Input />
        </Form.Item>
        <Form.Item name="zip_code" label="Zip Code">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(null, { getUserById, editUserData })(UserProfile);
