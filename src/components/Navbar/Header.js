import React from "react";

import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import "./Header.css";


function Header() {
  return (
    <nav className="header">
      {/* logo  */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* links */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionone">Hello Dee,</span>
            <span className="header__optiontwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionone">Returns</span>
            <span className="header__optiontwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionone">Your</span>
            <span className="header__optiontwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket Icon with number */}
      <Link className='header__link' to='/checkout'>
          <div className="header__optioncart">
              {/* cart Icon */}
              <ShoppingBasketIcon  />
              

              {/* no of items in Basket */}
              <span className='header__optiontwo header__cartcount'>0</span>
          </div>
      </Link>
    </nav>
  );
}

export default Header;
