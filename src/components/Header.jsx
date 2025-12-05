import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/uiSlice";

export default function Header() {
  const dispatch = useDispatch();

  const search = useSelector((s) => s.ui?.search || ""); // search text
  const cartCount = useSelector(
    (s) => s.cart.items.reduce((t, i) => t + i.quantity, 0)
  ); // total qty

  const onChange = (e) => {
    dispatch(setSearch(e.target.value)); // update search
  };

  return (
    <header className="header" role="banner">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h2 className="logo">ShoppyGlobe</h2> {/* brand */}

        <div className="search">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={onChange}
            aria-label="Search products"
          />
        </div>
      </div>

      <nav aria-label="main navigation">
        <Link to="/">Home</Link>

        <Link to="/cart" style={{ position: "relative" }}>
          🛒 Cart
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -6,
                right: -10,
                background: "red",
                color: "white",
                padding: "2px 6px",
                borderRadius: "50%",
                fontSize: 12,
              }}
            >
              {cartCount} {/* cart badge */}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
