import React, {Component} from 'react';
import Main from './components/main/Main';
import Detail from './components/detail/Detail';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
	state = {
		moviesList: []
	}

	updateState = this.updateState.bind(this)

	updateState(movies) {
		this.setState({
			moviesList: movies
		})
	}
	
	render() {
		return (
			<Switch>
				<Route exact path='/' render={() => <Main updateState={this.updateState} state={this.state} />} />
				<Route  exact path='/detail/:banana' render={() => <Detail state={this.state} />} />
			</Switch>
    );
  }
}

export default App;
