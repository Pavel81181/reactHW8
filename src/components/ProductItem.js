import React, { useContext } from 'react';

import { HandySvg } from "handy-svg";
import add_to_cart_btn from "../styles/img/add_to_cart_btn.svg";

import { CartContext } from "../contexts/CartContext"; 


function ProductItem({ id, title, description, price, imageUrl }) {
  
  const { addToCart } = useContext(CartContext);

  
  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="item">
      <div className="item_img">
        <div className="hover_img"></div>
        <div className="hover_button">
          <div className="add_to_cart_btn" onClick={handleAddToCart}>
            <HandySvg src={add_to_cart_btn} width="27" height="25" />
            Add to Cart
          </div>
        </div>
        <img className="item_pic" src={imageUrl} alt="Product" />
      </div>
      <div className="item_text">
        <h5 className="item_title">{title}</h5>
        <p className="item_description">{description}</p>
        <p className="item_price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductItem;
