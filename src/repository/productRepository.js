import axios from "axios";

const fetchProducts = async (nhomId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/nhom/sanpham/${nhomId}`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

const detailProduct = async (masp) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/sanpham/detail/${masp}`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
}

const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/sanpham/all`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
}
export { fetchProducts, detailProduct, getAllProducts };
