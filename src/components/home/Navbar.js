import React from "react";
import { Link } from "react-router-dom";
import "../../components/styles/Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../../assets/quin logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/helmets">Helmets</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <div className="user-icons">
        <Link to="/account">
          <i className="fa fa-user"></i>
        </Link>
        <Link to="/search">
          <i className="fa fa-search"></i>
        </Link>
        <Link to="/cart">
          <i className="fa fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
