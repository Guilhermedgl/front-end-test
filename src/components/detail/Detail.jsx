import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

class Detail extends Component{
  render() {
    console.log('params', this);
    return (
      <Grid>
        <Grid.Column width={4}>
          <Image src={this.props} />
        </Grid.Column>
        <Grid.Column width={9}>
          <Image src='/images/wireframe/paragraph.png' />
        </Grid.Column>
      </Grid>
    )
  }
};

export default Detail;