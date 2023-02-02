import React from "react";

import "./CheckoutProduct.css";

const CheckoutProduct = (props) => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        alt=""
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">Sooooper</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>9.56</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
