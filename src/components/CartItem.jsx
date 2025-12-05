import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { incrementQty, decrementQty, removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const dec = () => {
    if (item.quantity > 1) dispatch(decrementQty(item.id)); // decrease qty
  };

  const inc = () => {
    dispatch(incrementQty(item.id)); // increase qty
  };

  return (
    <div className="cart-item" role="listitem">
      <img src={item.thumbnail} alt={item.title} loading="lazy" /> {/* image */}

      <div style={{ flex: 1 }}>
        <strong>{item.title}</strong> {/* title */}
        <p>₹ {item.price} each</p> {/* price */}

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
          <button onClick={dec} className="ghost">-</button> {/* minus */}
          <span>{item.quantity}</span> {/* qty */}
          <button onClick={inc} className="ghost">+</button> {/* plus */}

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: 12 }}
            className="ghost"
          >
            Remove {/* delete */}
          </button>
        </div>
      </div>

      <div style={{ minWidth: 80, textAlign: "right" }}>
        <p>₹ {item.price * item.quantity}</p> {/* total */}
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // id
    title: PropTypes.string.isRequired, // name
    price: PropTypes.number.isRequired, // price
    thumbnail: PropTypes.string, // img
    quantity: PropTypes.number.isRequired // qty
  }).isRequired
};
