// src/components/Cart.jsx
import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setLoading(true);
    const order = {
      items: cartItems,
      total: total,
      createdAt: new Date().toISOString(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (e) {
      console.error("Error confirming order: ", e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Procesando compra...</p>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {orderId ? (
        <p>Compra confirmada. Su ID de orden es: {orderId}</p>
      ) : cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>
                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button
            onClick={clearCart}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Vaciar Carrito
          </button>
          <button
            onClick={handleCheckout}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
          >
            Confirmar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
