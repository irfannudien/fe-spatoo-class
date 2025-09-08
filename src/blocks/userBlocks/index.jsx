import React from "react";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { getUserById, editUserData } from "@/redux/actions/userAction";

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  // ======= GET USER DATA ========
  async componentDidMount() {
    const userId = 14;
    const result = await this.props.getUserById(userId);

    console.log("ISI RESULT.DATA getuserbyid", result.data);

    if (result.success) {
      this.setState({ userData: result.data });
    } else {
      alert(result.message);
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
      alert("User update successfully!");
      this.setState({
        userData: { ...userData, ...updatedUserData, ...updatedProfileData },
      });
    } else {
      alert(result.message);
    }
  };

  render() {
    const { userData } = this.state;

    if (!userData) return <p>Loading...</p>;

    return (
      <Form
        key={userData.id}
        initialValues={{
          name: userData.name,
          email: userData.email,
          phone_number: userData.phone_number,
          address: userData.address,
          city: userData.city,
          zip_code: userData.zip_code,
        }}
        layout="vertical"
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(null, { getUserById, editUserData })(EditUserForm);
