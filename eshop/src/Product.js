import React from "react";

import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">${props.price}</p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="" />
      <button>Add To Basket</button>
    </div>
  );
};

export default Product;
