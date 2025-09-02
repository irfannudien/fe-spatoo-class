import axios from "axios";

import { URL_API } from "@/redux/actions/helper";

export const newsletterAction = (body) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://localhost:2000/newsletter/insertnewsubscriber",
        body
      );
      return { success: true, message: "Email Subscribed Successfully!" };
    } catch (err) {
      const errMessage = err?.response?.data || "Error subscribing email";
      return { success: false, message: errMessage };
    }
  };
};
