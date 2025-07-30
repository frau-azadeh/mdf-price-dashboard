import axios from "axios";

const API_URL = "https://localhost:7142/api"; 

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return [];
  }
};
