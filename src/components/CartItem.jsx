import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const dec = () => {
  if (item.quantity > 1) {
    dispatch(decrementQty(item.id)); 
  } else {
    alert("🚫 Quantity cannot be less than 1"); // decrease qty
  }
};

  const inc = () => {
    dispatch(incrementQty(item.id)); // increase qty
  };

  return (
    <div className="cart-item" role="listitem">
      
      {/* product image */}
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        loading="lazy" 
        className="cart-img"
      />

      {/* center block */}
      <div className="cart-info">
        <strong className="cart-title">{item.title}</strong>
        <p className="cart-price">₹ {item.price} each</p>

        {/* qty + remove */}
        <div className="cart-actions">
          <button onClick={dec} className="qty-btn">-</button>
          <span className="qty-display">{item.quantity}</span>
          <button onClick={inc} className="qty-btn">+</button>

          <button 
            onClick={() => dispatch(removeFromCart(item.id))}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      </div>

      {/* price block */}
      <div className="cart-total">
        <p>₹ {(item.price * item.quantity).toFixed(2)}</p>
      </div>

    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    quantity: PropTypes.number.isRequired
  }).isRequired
};
