import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation()
//   console.log(location)
//   console.log(user);

if(loading) {
    return <div className="flex justify-center items-center h-screen ">
       <span  className="loading loading-spinner loading-xl"></span>
    </div>
}

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/register"></Navigate>;
};

export default PrivateRoute;
