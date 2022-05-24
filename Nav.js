import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Searchbar from "./SearchBar";

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
              <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"></img>
            </li>
          </Link>
          <Link to="/myaccount">
            <li>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"></img>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
