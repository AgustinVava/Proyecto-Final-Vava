// src/components/ItemDetailContainer.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../Services/productService";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    getProductById(productId).then(setProduct);
  }, [productId]);

  const handleAddToCart = (quantity) => {
    // Lógica para agregar al carrito
    setAddedToCart(true);
  };

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      {!addedToCart ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
