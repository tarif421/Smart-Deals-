import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts/AllProducts";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: 'register',
        Component: Register
      }
      
    ],
  },
]);
