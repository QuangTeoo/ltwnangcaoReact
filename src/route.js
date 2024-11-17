import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductList from "./components/ListProduct";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/login";
import ListAllProduct from "./components/ListAllProduct";
import Profile from "./components/Profile";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListAllProduct />,
      },
      {
        path: "category/:id",
        element: <ProductList />,
      },
      {
        path: "product/detail/:masp",
        element: <ProductDetail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);
