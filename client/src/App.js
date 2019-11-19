import React, { Component } from "react"
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom"
// Components
import Index from "./components/index"
import Feature from "./components/feature"
// import Error from '/components/error';
import About from "./components/about"
import Privacy from "./components/privacy"
import Retailer from "./components/retailer"
import News from "./components/news"
import order from "./components/preoder"

// import "/Semantic.css";
import "./App.css"

class App extends Component {
  render() {
    let deferredPrompt = ""
    window.addEventListener("beforeinstallprompt", function(e) {
      e.preventDefault()

      // Stash the event so it can be triggered later.
      deferredPrompt = e

      return false
    })

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/feature" component={Feature} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/retailers" component={Retailer} />
            <Route exact path="/news-and-events" component={News} />
            <Route exact path="/order" component={order} />
            <Redirect to="/" component={Index} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
