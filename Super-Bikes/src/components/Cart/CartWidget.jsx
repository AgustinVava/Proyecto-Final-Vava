// src/components/CartWidget.jsx
import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ position: "relative" }}>
      <img src="/cart-icon.png" alt="Carrito" style={{ width: "40px" }} />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px",
            fontSize: "12px",
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
