import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Searchbar from "./SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul className="nav-link ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/inspo">
            <li>Inspo</li>
          </Link>
          <li>
            <Searchbar />
          </li>
          <Link to="/shoppingcart">
            <li>
              <ShoppingBagIcon />
            </li>
          </Link>
          <Link to="/myaccount">
            <li>
              <AccountCircleIcon />
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
