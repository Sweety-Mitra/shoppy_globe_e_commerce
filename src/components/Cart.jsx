import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items || []);
  const navigate = useNavigate();

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")} className="link-like">Continue shopping</button>
        </div>
      ) : (
        <div>
          <div className="cart-list" role="list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <h3>Total: ₹ {total}</h3>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => navigate("/checkout")}>Go to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
