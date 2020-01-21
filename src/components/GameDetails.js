import React from 'react';
// import Game from './GameCard'


export default  class GameDetails extends React.Component{
    
    render(){
        console.log(this.props.game)
        return ( 
    
        <div>
           <h1> Gamer </h1>

           {/* <h1>{this.props.game.name}</h1>
           <h1>{this.props.game.name}</h1>
           <h1>{this.props.game.clip}</h1>
           <h1>{this.props.game.description}</h1>
           <h1>{this.props.game.rating}</h1>
           <h1>{this.props.game.name}</h1>
           <h1>{this.props.game.name}</h1>
        
           <input type="radio" name="save" value="owned" onChange={() => this.props.addToOwned}/>
            Add To Owned Games<br></br>

            <input type="radio" name="save" value="wishlist" onChange={() => this.props.AddToWishlist} />
            Add To wishlist<br></br> */}
        </div> 
        
        ) 

    }

}