import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './CartContext';

import Index from './components/index';
import KOOMPI_E13 from './components/koompi-e13/koompi-e13';
import KOOMPI_E13_Specs from './components/koompi-e13/koompi-e13-specs';
import KOOMPI_E11 from './components/koompi-e11/koompi-e11';
import KOOMPI_E11_Specs from './components/koompi-e11/koompi-e11-specs';

import Item from './components/item';
import ShopingCart from './components/shopping-cart';
import Contact from './components/contact';
import About from './components/About';
import News from './components/news';
import Retailer from './components/retailer';
import { BackTop, Icon } from 'antd';
import SinglePage from './components/single-page';
import Search from './components/search';
import PageNotFound from './components/page-not-found';
import NProgress from 'nprogress';
function App() {
  NProgress.configure({ showSpinner: false });
  return (
    <CartProvider>
      <BackTop>
        <Icon type="caret-up" />
      </BackTop>
      <Router>
        <Switch>
          <Route exact path="/koompi-e11" component={KOOMPI_E11}></Route>
          <Route
            exact
            path="/koompi-e11/specs"
            component={KOOMPI_E11_Specs}
          ></Route>
          <Route exact path="/koompi-e13" component={KOOMPI_E13}></Route>
          <Route
            exact
            path="/koompi-e13/specs"
            component={KOOMPI_E13_Specs}
          ></Route>
          <Route exact path="/item" component={Item}></Route>
          <Route exact path="/shop/bag" component={ShopingCart}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about-us" component={About}></Route>
          <Route exact path="/retailers" component={Retailer}></Route>
          {/* ===== News and Events Route */}
          <Route exact path="/category" component={News}></Route>
          <Route exact path="/news-and-events" component={News}></Route>
          <Route
            exact
            path="/news-and-events/:title"
            component={SinglePage}
          ></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/search?query=:title" component={Search}></Route>

          <Route exact path="/" exact component={Index}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
