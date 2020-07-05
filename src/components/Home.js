import React from 'react';
import ApiGameCard from './ApiGameCard';
import {Grid, Container} from 'semantic-ui-react'



export default  class Home extends React.Component{
    render(){
        


    return ( 
    
        <Container>
           <h1> Welcome To Vapor </h1>
        
          <Grid>
            <Grid.Row stretched padded='vertically'>
              <Grid.Column width={7} >
                { this.props.games ? this.props.games.map(game => <ApiGameCard game={game} displayGame={this.props.displayGame}/>) : null} 
              </Grid.Column>
              <Grid.Column width={9} >
                <br></br>
                <p>Vapor is a project made with the intention of creating a streamline system to allow  for people to find and catalog the games you want.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
              
         
        </Container> 
        
    ) 
    

  }

}