import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {/* <Link to="/shipping">shipping</Link> */}
        <Link to="/about">About</Link>
        {user?.email ? (
          <button onClick={logOut} className="btn-logout">
            logOut
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
