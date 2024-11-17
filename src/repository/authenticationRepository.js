import axios from "axios";
async function login(username, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/login",
      {
        username,
        password,
      },
      {
        withCredentials: true,

      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
}
async function logout() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/auth/logout",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
}
async function getProfile() {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/auth/profile",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
}

export { login, logout, getProfile };
