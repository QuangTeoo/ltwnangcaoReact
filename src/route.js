import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Hello } from "./components/Hello";
import Login  from "./components/Login";
import  Car  from "./components/Car";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/car",
    element: <Car />,
  },
  {
    path: "/*",
    element: <h1>404 Not Found</h1>,
  },
]);