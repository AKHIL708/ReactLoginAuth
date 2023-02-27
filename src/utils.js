import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = { token: localStorage.getItem("role") };
  
  // let auth = { token: true };
  // here if the auth is true then only you can redirect to different 
  // route other wise you cannot...

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
