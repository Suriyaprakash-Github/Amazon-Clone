import React, { useContext } from "react";
import "./Subtotal.css";

// import { useStateValue } from "./StateProvider";
import { StateContext } from "./StateProvider";

import { getBasketTotal } from "./Reducer";

function Subtotal() {
  // const [{ basket }, dispatch] = useStateValue();
  const [{ basket }] = useContext(StateContext);

  const value = getBasketTotal(basket);
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>${value}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
