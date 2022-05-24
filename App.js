import React, { Component } from "react";
import Nav from "./Nav";
import Shoppingcart from "./ShoppingCart";
import Myaccount from "./MyAccount";
import Inspo from "./Inspo";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchbar from "./SearchBar";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspo" element={<Inspo />} />
            <Route path="/shoppingcart" element={<Shoppingcart />} />
            <Route path="/myaccount" element={<Myaccount />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
