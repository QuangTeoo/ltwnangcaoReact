import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/login",
      element:<Login />
    }],
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);
