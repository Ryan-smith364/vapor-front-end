import React from 'react';
import Game from '../components/Game'


export default  class SavedGames extends React.Component{
  render(){
    return (
        <div>
            <h1>Saved Games:</h1>

            <ul>
                {this.props.savedGames ? this.props.savedGames.map(game => <li onClick={() => this.props.displayGame(game)}>{game.title}</li>) : null }
             </ul>                                                 {/* render a game card which onClick displays the game in the game display path */}
        </div>
    )

  }

}