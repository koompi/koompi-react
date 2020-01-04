import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import KoompiPro from './components/KoompiPro';
import KoompiE11 from './components/KoompiE11';

function App() {
  return (
    // <div>
    // 	<Index />
    // 	<KoompiE11 />
    // </div>
    <React.Fragment>
      <Router>
        <Route path="/" exact component={Index}></Route>
        <Route path="/KoompiPro" component={KoompiPro}></Route>
        <Route path="/KoompiE11" component={KoompiE11}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
