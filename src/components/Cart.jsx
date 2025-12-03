import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      <p>Cart items will appear here.</p>

      {/* Checkout Button */}
      <Link to="/checkout">
        <button style={{ marginTop: "20px" }}>Go to Checkout</button>
      </Link>
    </div>
  );
}
