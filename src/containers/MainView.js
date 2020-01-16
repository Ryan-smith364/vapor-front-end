import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GameSearch from '../components/Search'
import GameDetails from '../components/GameDetails'
import UserList from '../containers/UserList'
import UserDetails from '../components/UserDetails'
import Login from '../components/Login'
import Home from '../components/Home'


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

                <Route path='/login' render={() => {   return <Login/>   }}/>
                <Route path='/games/:name' render={() => {   return <GameDetails/>    }}/>
                <Route path='/games/users/:id' render={() => {   return <UserDetails/>   }}/>
                <Route path='/games/search' render={() => {   return <GameSearch/>    }}/> 
                <Route path='/games/users' render={() => {   return <UserList/>   }}/>
                <Route path='/' render={() => {   return <Home/>   }}/>

            </Switch>
          </BrowserRouter>
        </div>
    )
    
  }
  
}