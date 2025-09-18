import axios from "axios";
const API_URL_USER = "http://localhost:2000/api/user";
const API_URL_AUTH = "http://localhost:2000/api/auth";

export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL_USER}/profile/${userId}`, {
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

export const registerUser = (body) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL_AUTH}/register`, body);
      const result = res.data;

      console.log("RESUL REGISTER", result);

      return { success: true, result };
    } catch (err) {
      const errMessage =
        err?.response?.data || "Something went wrong. Please try again.";
      return { success: false, message: errMessage };
    }
  };
};

export const verifyEmail = (token) => {
  return async (dispatch) => {
    try {
      console.log("TOKEN ACTIONS", token);
      const res = await axios.post(
        `${API_URL_AUTH}/verify-email?token=${token}`
      );
      const data = res.data;
      console.log("DATA VERIFY EMAIL TOKEN", data);

      return { success: true, data };
    } catch (err) {
      const errMessage = err?.response?.data || "Error verify email";
      return { success: false, message: errMessage };
    }
  };
};

export const resendToken = (email) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL_AUTH}/resend-token`, { email });
      const result = res.data;
      console.log("RESULT RESEND TOKEN", result);

      return { success: true, result };
    } catch (err) {
      const errMessage = err?.response?.data || "Error resend token";
      return { success: false, message: errMessage };
    }
  };
};

export const loginUser = (body) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL_AUTH}/login`, body);
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
      const res = await axios.put(`${API_URL_USER}/edituser/${id}`, body, {
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
