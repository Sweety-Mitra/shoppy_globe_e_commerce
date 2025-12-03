// Product list UI: shows loading, errors, and filtered products using redux search.
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

export default function ProductList() {
  // fetch products with hook (provides loading + error)
  const { products, loading, error } = useProducts();

  // read search term from redux ui slice
  const search = useSelector((state) => (state.ui && state.ui.search) ? state.ui.search.toLowerCase() : "");

  // filter products by title (case-insensitive)
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  // show loading UI
  if (loading) return <h2 style={{ textAlign: "center" }}>⏳ Loading products...</h2>;

  // show error UI with retry button
  if (error)
    return (
      <div style={{ padding: 20, textAlign: "center", color: "#b00020" }}>
        <h3>⚠ Failed to load products</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );

  // no results message
  if (filtered.length === 0) return <h3 style={{ textAlign: "center" }}>No products match your search.</h3>;

  // normal product grid
  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
        {filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
