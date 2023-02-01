import React, { Fragment } from "react";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <div className="header__logo">
          <StoreIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">My Shop</h2>
        </div>

        <div className="header__search">
          <input type="text" className="header__searchInput"></input>
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">Your</span>
            <span className="nav__itemLineTwo">Shop</span>
          </div>
          <div className="nav__item">
            <ShoppingBasketIcon
              className="itemBasket"
              fontSize="large"
            ></ShoppingBasketIcon>
            <span className="nav__itemLineTwo nav__basketCount">0</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
