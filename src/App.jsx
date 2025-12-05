import React, { Suspense } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      {/* Hero required for Home */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Welcome to ShoppyGlobe</h1>
          <p>Explore trending products — fast delivery, trusted sellers.</p>
          <button
            className="cta"
            onClick={() => {
              // scroll to products grid
              const el = document.querySelector(".product-grid");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      <Suspense fallback={<div className="loading-block">Loading products...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
