import axios from "axios";
const API_URL = "http://localhost:2000/api/user";

export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // console.log("GET USER DATA PROFILE", res.data);
      return { success: true, data: res.data };
    } catch (err) {
      const errMessage = err?.response?.data || "Error get user";
      return { success: false, message: errMessage };
    }
  };
};

export const loginUser = (body) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/login`, body);
      const result = res.data.data;

      console.log("Response Login Data", res.data);

      localStorage.setItem("token", res.data.token);

      return { success: true, result };
    } catch (err) {
      const errMessage =
        err?.response?.data || "Something went wrong. Please try again";
      return { success: false, message: errMessage };
    }
  };
};

export const editUserData = (id, body) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(`${API_URL}/edituser/${id}`, body, {
        headers: { Authorization: `Bearer ${token}` },
      });

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
