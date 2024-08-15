// src/components/ProductCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            marginBottom: "8px",
          }}
        />
      </Link>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
        {product.name}
      </h3>
      <p style={{ fontSize: "1rem", color: "#555", marginBottom: "16px" }}>
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
