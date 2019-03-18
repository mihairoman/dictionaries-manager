import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import DictionaryPanelList from './components/dictionary/DictionaryCardList';
import DictionaryEdit from './components/dictionary/DictionaryEdit';
import DictionaryCreate from './components/dictionary/DictionaryCreate';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Navbar />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={DictionaryPanelList} />
							<Route path='/dictionary/:id' component={DictionaryCreate} />
							<Route path='/createDictionary' component={DictionaryCreate} />
						</Switch>
					</div>
				</React.Fragment>
			</BrowserRouter >
		);
	}
}

export default App;
