import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <>
        <div className="header-section">
          <div className="logo">
            <img
              className="app-logo"
              src="LOGO_URL"
              alt="logo"
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Instamart</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header;