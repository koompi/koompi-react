import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import KoompiE11 from './components/KoompiE11';

function App() {
	return (
		// <div>
		// 	<Index />
		// 	<KoompiE11 />
		// </div>
		<React.Fragment>
			<Router>
				<Route path='/' exact component={Index}></Route>
				<Route path='/koompie11' component={KoompiE11}></Route>
			</Router>
		</React.Fragment>
	);
}

export default App;
