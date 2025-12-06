import React, { Suspense } from "react";
import ProductList from "./ProductList";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner hero-new">
          <h1>Welcome to ShoppyGlobe</h1>
          <p>Explore trending products — fast delivery, trusted sellers.</p>

          <button
            className="cta"
            onClick={() => {
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
    </>
  );
}
