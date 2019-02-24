import React from 'react';
import { Grid, Image, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const selectMovie = props.state.moviesList[props.match.params.id].show;
    const { name, genres, image, summary, premiered } = selectMovie;
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column width={3} >
            <Image src={props.checkImage(image)} />
          </Grid.Column>
          <Grid.Column width={10} >
            <Card
              fluid
              header={name}
              meta={genres.join(', ')}
              description={summary}
              extra={`Release date ${premiered}`}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column>
          <Link to='/'>
            <Button color='blue'>Back</Button>
          </Link>
        </Grid.Column>
      </Grid>
    )
  }

export default Detail;