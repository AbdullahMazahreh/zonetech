import React, { Fragment, useContext } from "react";
import logo from "./z-tech.png";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { allData } from "../../context/Context";
import { Button } from "../Index";
import { Link } from "react-router-dom";

function Navbar() {
  const { signedInUser } = useContext(allData);

  return (
    <Fragment>
      <header>
        <div className="header-leftside">
          <div className="logo-container">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">About Us</a>
          </div>
        </div>
        <div className="header-rightside">
          <div className="shopping-cart">
            {signedInUser ? (
              <Fragment>
                <FaShoppingCart /> ShoppingBag
              </Fragment>
            ) : null}
          </div>
          <div className="login-register-container">
            {signedInUser ? null : (
              <Fragment>
                <Link to="/signup">
                  <Button color="gray" placeholder="Sign In" />
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Navbar;
