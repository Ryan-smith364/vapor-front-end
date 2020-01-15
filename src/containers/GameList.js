import React from 'react';
import Game from '../components/Game';
import GameDisplay from '../components/GameDisplay';

export default class GameList extends React.Component{
  render(){
      console.log(this.props)
    return (
       <div>
           <ul>
             {this.props.games.map(game => <li onClick={()=> this.props.displayGame(game.title, game.platform)} >{game.title}</li> )}
           </ul>
       </div>
    )

  }

}