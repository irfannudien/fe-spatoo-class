import axios from "axios";

import { URL_API } from "@/redux/actions/helper";

export const getProductData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:2000/api/products");

      console.log("DATAAAAAAA", res.data);
      return { success: true, message: "Get product data success" };
    } catch (err) {
      const errMessage = err?.response?.data || "Error get product data";
      return { success: false, message: errMessage };
    }
  };
};
