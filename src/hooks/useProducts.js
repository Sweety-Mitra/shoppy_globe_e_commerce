// Custom hook to fetch products and expose loading/error states.
import { useEffect, useState } from "react";
import { fetchProducts } from "../api";

export default function useProducts() {
  const [products, setProducts] = useState([]); // product list
  const [loading, setLoading] = useState(true); // loading flag
  const [error, setError] = useState(null);     // error message

  useEffect(() => {
    let mounted = true; // avoid setting state after unmount

    async function load() {
      try {
        const data = await fetchProducts(); // call API helper
        if (!mounted) return;
        setProducts(data);
      } catch (err) {
        if (!mounted) return;
        setError(err.message || "Failed to load products");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    load();
    return () => { mounted = false; };
  }, []);

  return { products, loading, error };
}
