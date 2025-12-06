import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items || []);
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      {/* Title */}
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span className="item-count">{items.length} items</span>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")} className="continue-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          {/* LEFT — Cart Items */}
          <div className="cart-items-box">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT — Order Summary */}
          <div className="summary-box">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal ({items.length} items)</span>
              <strong>₹ {subtotal.toFixed(2)}</strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹ {subtotal.toFixed(2)}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout →
            </button>

            <button className="continue-small" onClick={() => navigate("/")}>
              ⬅ Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
