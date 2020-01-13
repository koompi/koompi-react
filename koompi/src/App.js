import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/Index";
import KoompiPro from "./components/KoompiPro";
import KoompiE11 from "./components/KoompiE11";
import { CartProvider } from "./CartContext";
import KoompiProBuy from "./components/buypage/KoompiProBuy";

import ShopingCart from "./components/ShopingCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/koompi-pro" component={KoompiPro}></Route>
          <Route path="/Koompi-e" component={KoompiE11}></Route>
          <Route path="/buy" component={KoompiProBuy}></Route>
          <Route path="/shoping-cart" component={ShopingCart}></Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
