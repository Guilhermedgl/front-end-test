import React, {Component} from 'react';
import Main from './components/main/Main';
import Detail from './components/detail/Detail';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
	state = {
		moviesList: [],
		search: ''
	}
	
	handleFormSubmit = this.handleFormSubmit.bind(this);
	getMovies = this.getMovies.bind(this);

	handleFormSubmit(e) {
		e.preventDefault()
		this.setState({
			search: e.currentTarget.value
		})
	}
	
	getMovies() {
		axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.search}`)
		.then((response) => {
			const movies = response.data
			this.setState({
				moviesList: movies
			})
		})
		.catch((error) => {
			console.log(error);
		})
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' render={() => <Main state={this.state} handleFormSubmit={this.handleFormSubmit} getMovies={this.getMovies} />} />
				<Route  exact path='/detail/:id' render={(props) => <Detail state={this.state} {...props} />} />
			</Switch>
    );
  }
}

export default App;
