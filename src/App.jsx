import React, { Suspense } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
