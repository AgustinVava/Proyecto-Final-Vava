// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{ padding: "20px", backgroundColor: "#007bff", color: "white" }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        <h1>Mi Tienda</h1>
      </Link>
      <Link
        to="/category/electronics"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Electrónica
      </Link>
      <Link
        to="/category/fashion"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Moda
      </Link>
      <Link
        to="/category/home"
        style={{ color: "white", textDecoration: "none", marginRight: "20px" }}
      >
        Hogar
      </Link>
      <Link
        to="/cart"
        style={{ color: "white", textDecoration: "none", marginLeft: "auto" }}
      >
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
