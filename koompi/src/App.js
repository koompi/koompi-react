import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import KoompiPro from './components/KoompiPro';
import KoompiE11 from './components/KoompiE11';
import KoompiProBuy from './components/buypage/KoompiProBuy';
import Contact from './components/Contact';
import KoompiB from './components/KoompiB';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/koompi-pro" component={KoompiPro}></Route>
          <Route path="/Koompi-e" component={KoompiE11}></Route>
          <Route path="/buykoompi-pro" component={KoompiProBuy}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/KoompiB" component={KoompiB}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
