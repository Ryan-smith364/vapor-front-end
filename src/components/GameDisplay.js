import React from 'react';
import Game from '../components/Game'


export default  class GameDisplay extends React.Component{
    render(){
        console.log(this.props.currentGame)
    return ( 
    
        <div>
           <h1>{this.props.currentGame.title}</h1>

           <div>
                <img src={this.props.currentGame.image} alt={this.props.currentGame.title}></img>
            </div>

           <p>{this.props.currentGame.rating}</p>
           <p>{this.props.currentGame.releaseDate}</p>

           <div>
                <h5>Genres:</h5>

                <ul>
                    { this.props.currentGame.genre.map(genre => <li>{genre}</li>)  }
                </ul>

                <p>{this.props.currentGame.developer}</p> 
            
            </div>

            <div>
                <h5>Devices:</h5>
                <ul>
                    {this.props.currentGame.alsoAvailableOn.map(device => <li>{device}</li>)}
                </ul>
           </div>

            <button onClick={() => this.props.saveGame(this.props.currentGame)}>Save</button>
        </div> 
        
    ) 

  }

}