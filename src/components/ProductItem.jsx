import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div className="product-card">
      {/* Lazy loading for images */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
