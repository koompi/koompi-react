import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// Components
import Index from "./components/index";
import Feature from "./components/feature";
// import Error from './components/error';
import About from "./components/about";
import Privacy from "./components/privacy";
import Retailer from "./components/retailer";
import News from "./components/news";
import preorder from "./components/preoder";

class App extends Component {
  render() {
    window.scrollTo(0, 0);
    var deferredPrompt;

    window.addEventListener("beforeinstallprompt", function(e) {
      console.log("beforeinstallprompt Event fired");
      e.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt = e;

      return false;
    });

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/feature" component={Feature} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/retailers" component={Retailer} />
          <Route exact path="/news-and-events" component={News} />
          <Route exact path="/preorder" component={preorder} />
          <Redirect to="/" component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
