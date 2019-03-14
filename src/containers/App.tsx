import * as React from 'react';
//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path='/' component={()=><div>HELLO World!</div>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
