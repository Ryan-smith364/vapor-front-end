import React from 'react';
import ApiGameCard from '../components/ApiGameCard'
import { Container, Grid } from 'semantic-ui-react';


export default class SearcheGameList extends React.Component{
  render(){

    return (
     <Container>
       <Grid>
          {this.props.games !== [] ? this.props.games.map( game => <ApiGameCard game={game} displayGame={this.props.displayGame} setCurrent={this.props.setCurrent}/> ): null }
       </Grid>
     </Container>
    )

  }

}
