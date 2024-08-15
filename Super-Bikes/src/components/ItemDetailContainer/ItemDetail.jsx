// src/components/ItemDetail.jsx
import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (quantity) => {
    setAddedToCart(true);
    // Agregar lógica para agregar al carrito
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      {product.stock > 0 ? (
        addedToCart ? (
          <p>Producto agregado al carrito.</p>
        ) : (
          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={handleAddToCart}
          />
        )
      ) : (
        <p>Producto sin stock.</p>
      )}
    </div>
  );
};

export default ItemDetail;
