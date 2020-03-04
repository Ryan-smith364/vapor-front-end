import React from 'react';
import ApiGameCard from './ApiGameCard';



export default  class Home extends React.Component{
    render(){
        
    return ( 
    
        <div>
           <h1> Welcome To Vapor </h1>
           <p>Vapor is a joint project of José and Ryan, we have worked together to make a streamlines system to allow people to find and catalog the games you want.</p>
          { this.props.games ? this.props.games.map(game => <ApiGameCard game={game} displayGame={this.props.displayGame}/>) : null}
        </div> 
        
    ) 

  }

}