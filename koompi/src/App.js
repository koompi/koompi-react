import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import withTracker from "./withTracker"
import { CartProvider } from "./CartContext"

import Index from "./components/index"
import KOOMPI_E11 from "./components/koompi-e11/koompi-e11"
import KOOMPI_E11_Specs from "./components/koompi-e11/koompi-e11-specs"
import KOOMPI_E13 from "./components/koompi-e13/koompi-e13"
import KOOMPI_E13_Specs from "./components/koompi-e13/koompi-e13-specs"

import Item from "./components/item"
import ShopingCart from "./components/shopping-cart/shopping-cart"
import Contact from "./components/contact"
import About from "./components/about/about"
import News from "./components/news"
import Retailer from "./components/retailer"
import { BackTop, Icon } from "antd"
import SinglePage from "./components/single-page"
import Search from "./components/search"
import PageNotFound from "./components/page-not-found"
import NProgress from "nprogress"
import SalePolicy from "./components/legals/sale-policy"
import KOOMPIOS from "./components/koompi-os/index"
import Navbar from "./components/navbar"
import PrivacyPolicy from "./components/legals/policy"
import TermsAndConditions from "./components/legals/terms-and-conditions"
import { HelmetProvider } from "react-helmet-async"
import "animate.css/animate.min.css"
import PreOrder from "./components/preorder/preorder"

function App() {
  NProgress.configure({ showSpinner: false })

  return (
    <HelmetProvider>
      <CartProvider>
        <BackTop>
          <Icon type="caret-up" />
        </BackTop>

        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/koompi-e11-order" component={PreOrder}></Route>
            <Route exact path="/koompi-e11" component={KOOMPI_E11}></Route>
            <Route
              exact
              path="/koompi-e11/specs"
              component={KOOMPI_E11_Specs}
            ></Route>
            <Route exact path="/" component={withTracker(Index)}></Route>
            <Route
              exact
              path="/koompi-e13"
              component={withTracker(KOOMPI_E13)}
            ></Route>
            <Route
              exact
              path="/koompi-e13/specs"
              component={withTracker(KOOMPI_E13_Specs)}
            ></Route>
            <Route exact path="/koompi-os" component={withTracker(KOOMPIOS)}></Route>
            <Route exact path="/item" component={withTracker(Item)}></Route>
            <Route
              exact
              path="/shop/bag"
              component={withTracker(ShopingCart)}
            ></Route>
            <Route exact path="/contact" component={withTracker(Contact)}></Route>
            <Route exact path="/about-us" component={withTracker(About)}></Route>
            <Route
              exact
              path="/shop/retailers"
              component={withTracker(Retailer)}
            ></Route>
            <Route
              exact
              path="/whitepaper/salespolicies"
              component={withTracker(SalePolicy)}
            ></Route>
            <Route
              exact
              path="/legal/privacy"
              component={withTracker(PrivacyPolicy)}
            ></Route>
            <Route
              exact
              path="/legal/terms-and-conditions"
              component={withTracker(TermsAndConditions)}
            ></Route>
            {/* ===== News and Events Route */}
            <Route exact path="/category" component={withTracker(News)}></Route>
            <Route
              exact
              path="/news-and-events"
              component={withTracker(News)}
            ></Route>
            <Route
              exact
              path="/news-and-events/:title"
              component={withTracker(SinglePage)}
            ></Route>
            <Route exact path="/search" component={withTracker(Search)}></Route>
            <Route
              exact
              path="/search?query=:title"
              component={withTracker(Search)}
            ></Route>

            <Route exact path="*" component={withTracker(PageNotFound)}></Route>
          </Switch>
        </Router>
      </CartProvider>
    </HelmetProvider>
  )
}

export default App
