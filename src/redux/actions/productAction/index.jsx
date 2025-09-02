import axios from "axios";

import { URL_API } from "@/redux/actions/helper";

export const getProductData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://localhost:2000/newsletter/insertnewsubscriber"
      );

      console.log("DATAAAAAAA", res.data);

      return { success: true, message: "Email Subscribed Successfully!" };
    } catch (err) {
      const errMessage = err?.response?.data || "Error subscribing email";
      return { success: false, message: errMessage };
    }
  };
};
