import React from "react";
import './Header.css';

const Header = ({ setSearch }) => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src="your-logo-url-here" alt="Store Logo" />
        </div>
        <input 
          type="text" 
          placeholder="Search for products" 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <div className="icons">
          <img src="wishlist-icon-url-here" alt="Wishlist" className="icon" />
          <img src="cart-icon-url-here" alt="Shopping Cart" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
