import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, setLoading, loading } = useContext(AuthContext);
  console.log(loading, user);
  const location = useLocation();
  if (user && user.uid) {
    // setLoading(false);
    return children;
  }
  if (loading) {
    // console.log("Yes Loading Found");
    return <div>Loading...</div>;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
