import axios from "axios";

const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/sanpham/nhom/all"
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

export { fetchCategories };
