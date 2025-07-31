import axios from "axios";

const API_URL = "https://localhost:7142/api";

// گرفتن همه محصولات
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت داده‌ها:", error);
    return [];
  }
};

// گرفتن فقط آخرین محصولات (بر اساس متد جدید در کنترلر)
export const getLatestProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products/latest`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت آخرین داده‌ها:", error);
    return [];
  }
};

//Analyze with python
export const getPriceAnalysis = async (query = "", type = "", size = "") => {
  const params = new URLSearchParams({
    query,
    type,
    size
  });
  const response = await fetch(`http://127.0.0.1:8000/analyze?${params}`);
  return await response.json();
};


