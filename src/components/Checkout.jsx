import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
 

export default function Checkout() {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Update Form Inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Place Order
  const placeOrder = () => {
    if (!form.name || !form.email || !form.address) {
      alert("Please fill all fields");
      return;
    }

    alert("Order placed successfully!");

    dispatch(clearCart());

    setTimeout(() => navigate("/"), 500);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* -------------------- CUSTOMER DETAILS -------------------- */}
      <div className="customer-section">
        <h3>Customer Details</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          rows={6}
        />
      </div>

      {/* -------------------- ORDER SUMMARY -------------------- */}
      <div className="order-summary">
        <h3>Order Summary</h3>

        {cart.length === 0 ? <p>No items in cart.</p> : (
          <>
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <p><strong>{item.title}</strong> × {item.quantity}</p>
                <p>₹ {item.price * item.quantity}</p>
              </div>
            ))}

            <h3 className="total-amount">Total: ₹ {total}</h3>
          </>
        )}
      </div>

      {/* -------------------- PLACE ORDER BUTTON -------------------- */}
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
