import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logo">ShoppyGlobe</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart</Link>
      </nav>
    </header>
  );
}
