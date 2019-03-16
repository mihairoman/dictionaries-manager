import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ButtonFloating from './components/shared/ButtonFloating';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={() =>
							<div className='container'>
								<div className='row'>
									<div className='col s6 offset-s2 m6 l4'>
										<div className='card-panel grey lighten-4'>
											<span className='blue-text text-darken-2'>
												I am a very simple card. I am good at containing small bits of information.
												I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
										</span>
										</div>
									</div>
									<div className='col s6 offset-s2 m6 l4'>
										<div className='card-panel grey lighten-4'>
											<span className='blue-text text-darken-2'>
												I am a very simple card. I am good at containing small bits of information.
												I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
										</span>
										</div>
									</div>
									<div className='col s6 offset-s2 m6 l4'>
										<div className='card-panel grey lighten-4'>
											<span className='blue-text text-darken-2'>
												I am a very simple card. I am good at containing small bits of information.
												I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
										</span>
										</div>
									</div>
								</div>
								<div className='fixed-action-btn direction-top' style={{ bottom: '6%', right: '4%'}}>
									<ButtonFloating />
								</div>
								
							</div>
						} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
