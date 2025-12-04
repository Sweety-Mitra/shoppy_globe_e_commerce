import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product)); // add item to cart
  };

  return (
    <div className="product-card" role="article">
      <img src={product.thumbnail} alt={product.title} loading="lazy" /> {/* product image */}
      <h3>{product.title}</h3> {/* product title */}
      <p>₹ {product.price}</p> {/* product price */}

      <div className="actions"> {/* buttons row */}
        <Link to={`/product/${product.id}`}>
          <button className="ghost" type="button">View Details</button> {/* open details page */}
        </Link>

        <button onClick={handleAdd} type="button">Add to Cart</button> {/* add to cart */}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id type
    title: PropTypes.string.isRequired, // product title
    price: PropTypes.number.isRequired, // product price
    thumbnail: PropTypes.string // image url
  }).isRequired
};
