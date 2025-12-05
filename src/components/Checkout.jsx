import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // derived total
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: "" }));
  };

  // basic validation
  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Valid email required";
    if (!form.phone.trim() || !/^[0-9]{7,15}$/.test(form.phone)) err.phone = "Valid phone required";
    if (!form.address.trim()) err.address = "Address is required";
    if (!form.pincode.trim()) err.pincode = "Pincode required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      setErrors({ cart: "Your cart is empty." });
      return;
    }

    if (!validate()) return;

    setSubmitting(true);

    // mimic network delay & show success message
    setTimeout(() => {
      dispatch(clearCart()); // clear cart
      setSuccess(true);
      setSubmitting(false);
      // redirect after short delay
      setTimeout(() => navigate("/"), 900);
    }, 700);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* -------------------- CUSTOMER DETAILS -------------------- */}
      <div className="checkout-grid">
        {/* Customer details */}
        <div className="customer-section">
          <h3>Customer Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
          />
          {errors.name && <div className="field-error">{errors.name}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && <div className="field-error">{errors.email}</div>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <div className="field-error">{errors.phone}</div>}

          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            rows={4}
            aria-invalid={!!errors.address}
          />
          {errors.address && <div className="field-error">{errors.address}</div>}

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            aria-invalid={!!errors.pincode}
          />
          {errors.pincode && <div className="field-error">{errors.pincode}</div>}
        </div>

        {/* -------------------- ORDER SUMMARY -------------------- */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              <div className="summary-list">
                {cart.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <div>
                      <strong>{item.title}</strong>
                      <div className="muted">Qty × {item.quantity}</div>
                    </div>
                    <div>₹ {item.price * item.quantity}</div>
                  </div>
                ))}
              </div>

              <h3 className="total-amount">Total: ₹ {total}</h3>
            </>
          )}

          {errors.cart && <div className="field-error">{errors.cart}</div>}

          {/* -------------------- PLACE ORDER BUTTON -------------------- */}
          <button
            onClick={placeOrder}
            disabled={submitting || cart.length === 0}
            className="place-order"
          >
            {submitting ? "Placing order..." : "Place Order"}
          </button>

          {success && <div className="success-msg">Order placed — redirecting to Home</div>}
        </div>
      </div>
    </div>
  );
}
