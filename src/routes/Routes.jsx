import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts/AllProducts";
import Register from "../components/Register/Register";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";
import ProductDetails from "../components/Product/ProductDetails";
import PrivateRoute from "./PrivateRoute";

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
        path: "register",
        Component: Register,
      },
      {
        path: "myProducts",
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
      },
      {
        path: "myBids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
      },
      {
        path: "productDetails/:id",

        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);
