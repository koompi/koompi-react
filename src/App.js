import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import Index from './components/index';
import Feature from './components/feature';
import Error from './components/error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/feature" component={Feature} />
          <Redirect to="/error" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
