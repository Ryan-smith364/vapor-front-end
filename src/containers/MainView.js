import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GameSearch from '../components/Search'
import GameDisplay from '../components/GameDetails'
import UserList from '../containers/UserList'
// import SavedGames from '../containers/SavedGames'
// import GameList from '../containers/GameList'

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
    
    return (
        <div>
          <BrowserRouter>
            <Switch>
                <Route path='/games/search' render={() => {   return <GameSearch/>    }}/> 
                <Route path='/games/:id' render={() => {   return <GameDisplay/>    }}/>
                <Route path='/games/users' render={() => {   return <UserList/>   }}/>
                <Route path='/games/users/:id' render={() => {   return <UserList/>   }}/>
              
            </Switch>
          </BrowserRouter>
        </div>
    )
    
  }
  
}