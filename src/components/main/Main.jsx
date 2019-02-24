import React, { Component } from 'react';
import { Card, Grid, Input, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Grid container centered>
        <Form onSubmit={this.props.getMovies}>
          <Input onChange={this.props.handleFormSubmit} placeholder='Search' icon='search' />
        </Form>
        </Grid>
        <Grid stackable columns={5} centered padded='horizontally'>
          {this.props.state.moviesList.map((movie, idx) => {
            return (
              <Grid.Column 
                key={idx}
                computer={3}
                tablet={4}>
                <Link to={`/detail/${idx}`}>
                  <Card
                    raised
                    image={this.props.checkImage(movie.show.image)}
                    header={movie.show.name}
                    meta={movie.show.genres.join(', ')}
                  />
                </Link>
              </Grid.Column>
            )})}
        </Grid>
      </div>
    )
  }
}

export default Main;