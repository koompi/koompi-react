import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/Index";
import Koompi from "./components/Koompi-pro";
import KoompiE11 from "./components/KoompiE11";
import { CartProvider } from "./CartContext";
import Item from "./components/item";

import ShopingCart from "./components/ShopingCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/koompi-pro" component={Koompi}></Route>
          <Route path="/koompi-pro/specs" component={Koompi}></Route>
          <Route path="/Koompi-e" component={KoompiE11}></Route>
          <Route path="/Koompi-e/specs" component={KoompiE11}></Route>
          <Route path="/Koompi-b" component={KoompiE11}></Route>
          <Route path="/Koompi-b/specs" component={KoompiE11}></Route>
          <Route path="/Koompi-b15" component={KoompiE11}></Route>
          <Route path="/Koompi-b15/specs" component={KoompiE11}></Route>
          <Route path="/item" component={Item}></Route>
          <Route path="/shop/bag" component={ShopingCart}></Route>
          <Route path="/koompi-os" component={Koompi}></Route>
          <Route path="*" exact component={Index}></Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
