import axios from "axios";
const API_URL = "http://localhost:2000/api/user";

export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL}/profile/${userId}`);

      // console.log("GET USER DATA PROFILE", res.data);
      return { success: true, data: res.data };
    } catch (err) {
      const errMessage = err?.response?.data || "Error get user";
      return { success: false, message: errMessage };
    }
  };
};

export const editUserData = (id, body) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${API_URL}/edituser/${id}`, body);

      console.log("EDIT DATA", res.data);
      return {
        success: true,
        message: "Edit user  data successfully",
        data: res.data,
      };
    } catch (err) {
      const errMessage = err?.response?.data || "Error edit user data";
      return { success: false, message: errMessage };
    }
  };
};
