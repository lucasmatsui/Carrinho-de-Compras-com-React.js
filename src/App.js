import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Config from './Config';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';

class App extends Component {

	render() {
		return (
			<BrowserRouter basename={Config.BASE_URL}>
				<div>
					<Header />

					<Route exact path="/" component={Cart} />
					
				</div>
			</BrowserRouter>
		);
	}

}

export default App;