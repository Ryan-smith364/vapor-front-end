import React from 'react';
// import GameSearch from '../components/Search'
// import GameList from '../containers/GameList'
// import GameDisplay from '../components/GameDetails'
// import SavedGames from '../containers/SavedGames'

export default  class MainView extends React.Component{
     
    searchForGames = (event) => {
        event.preventDefault()
        
        let game = event.currentTarget.firstElementChild.value
        
        event.currentTarget.firstElementChild.value = ''

        let search = game.split(" ").join("-")
        
        this.fetchGameSearch(search)
    }

   

    fetchGameSearch = (search) =>{
        
        fetch(`https://rawg-video-games-database.p.rapidapi.com/games?search=${search}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
              "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
            }
          })
          .then(response => response.json())
          .then(game => console.log(game))
          .catch(err => {
            console.log(err);
           });
    
    }

    displayGame = (title) => {
      
        fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${title}`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
              "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
            }
          })
            .then(response => response.json())
            .then(game => console.log(game))
            .catch(err => {
                console.log(err);
            });
     
    }

    
  render(){
    debugger
    return (
        <div>
           
        </div>
    )

  }

}