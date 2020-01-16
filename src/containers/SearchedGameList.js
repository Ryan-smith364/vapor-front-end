import React from 'react';
import ApiGameCard from '../components/ApiGameCard';


export default class SearcheGameList extends React.Component{
  render(){
   
    return (
       <div>
          {this.props.games !== [] ? this.props.games.map( game => <ApiGameCard game={game}/>) : null }
       </div>
    )

  }

}

   