// src/components/ItemListContainer.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
