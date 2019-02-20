import React, { Component } from 'react';
import axios from 'axios';
import { Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Main extends Component {

  componentDidMount() {
    axios.get('http://api.tvmaze.com/search/shows?q=batman')
      .then((response) => {
        const movies = response.data
        this.props.updateState(movies);
      });
  }

  render() {
    return (
      <Grid stackable columns={5} centered padded='horizontally'>
        {this.props.state.moviesList.map((movie, idx) => {
          return (
            <Grid.Column 
              key={idx}
              computer={3}
              tablet={4}>
              <Link to={`/detail/${movie.show.id}`}>
                <Card
                  image={movie.show.image.medium}
                  header={movie.show.name}
                  meta={movie.show.genres.join(', ')}
                />
              </Link>
            </Grid.Column>
          )})}
      </Grid>
    )
  }
}

export default Main;