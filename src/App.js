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
	checkImage = this.checkImage.bind(this);

	handleFormSubmit(e) {
		e.preventDefault()
		this.setState({
			search: e.currentTarget.value
		})
	}

	checkImage(movies) {
		if (movies) {
			return movies.original;
		} else return 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
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
			console.log(error)
		})
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' render={() => <Main state={this.state} handleFormSubmit={this.handleFormSubmit} getMovies={this.getMovies} checkImage={this.checkImage} />} />
				<Route  exact path='/detail/:id' render={(props) => <Detail state={this.state} {...props} checkImage={this.checkImage} />} />
			</Switch>
    );
  }
}

export default App;
