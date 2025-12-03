import { useEffect, useState } from "react";
import { fetchProducts } from "../api";

export default function useProducts() {
  const [products, setProducts] = useState([]); // store product list
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null); // error message

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts(); // API call
        setProducts(data);
      } catch (err) {
        setError(err.message); // store error
      } finally {
        setLoading(false); // stop loading
      }
    }

    loadProducts();
  }, []);

  return { products, loading, error };
}
