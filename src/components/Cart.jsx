import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items || []);

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue shopping</Link>
        </div>
      ) : (
        <div>
          <div className="cart-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div style={{ marginTop: 12 }}>
            <h3>Total: ₹ {total}</h3>
            <Link to="/checkout"><button style={{ marginTop: 8 }}>Go to Checkout</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}
