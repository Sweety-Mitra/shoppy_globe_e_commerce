import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";


export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product)); // add item to cart
  };

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/product/${product.id}`); // open details page
  };

  return (
  <div className="product-card" role="article">
    <img src={product.thumbnail} alt={product.title} loading="lazy" /> {/* img */}
    <h3>{product.title}</h3> {/* title */}
    <p>₹ {product.price}</p> {/* price */}

    <div className="actions"> {/* buttons row */}
      <button className="ghost" type="button" onClick={goToDetails}>
        View Details
      </button> {/* open details */}

      <button onClick={handleAdd} type="button">
        Add to Cart
      </button> {/* add */}
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
