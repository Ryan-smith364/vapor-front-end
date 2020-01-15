import React from 'react';
import GameSearch from '../components/Search'
import GameList from '../containers/GameList'
import GameDisplay from '../components/GameDetails'
import SavedGames from '../containers/SavedGames'

export default  class MainView extends React.Component{
   
    searchForGames = (event) => {
        event.preventDefault()
        
        let game = event.currentTarget.firstElementChild.value
        
        event.currentTarget.firstElementChild.value = ''

        let search = game.split(" ").join("-")
        
        this.fetchGame(search)
    }



    fetchGame = (search) =>{
        
        fetch(`https://chicken-coop.p.rapidapi.com/games?title=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
                "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
            }
            })
        .then(response => response.json())
        .then(json => console.log(json))
            
    
    }



    displayGame = (title) => {
      
       

            fetch(`https://chicken-coop.p.rapidapi.com/games/${title}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
                    "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
                }
            })
            .then(response => response.json())
            .then(game => console.log(game))
     
    }

    
  render(){
    return (
        <div>
           
        </div>
    )

  }

}