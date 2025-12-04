import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/uiSlice";

export default function Header() {
  const dispatch = useDispatch();
  const search = useSelector((s) => s.ui?.search || "");

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="header" role="banner">
      <div style={{display:"flex", gap:12, alignItems:"center"}}>
        <h2 className="logo">ShoppyGlobe</h2>
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
        <Link to="/cart">🛒 Cart</Link>
      </nav>
    </header>
  );
}
