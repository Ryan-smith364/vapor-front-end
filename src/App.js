import React from 'react';
import './App.css';
import Head from './components/Head'
// import MainView from './containers/MainView'
import 'semantic-ui-css/semantic.min.css'
import {Route, Switch} from 'react-router-dom'
import SearchContainer from './components/SearchContainer'
import GameDetails from './components/GameDetails'
import UserList from './containers/UserList'
import UserDetails from './components/UserDetails'
import Login from './components/Login'
import Home from './components/Home'
const URL_USERS = 'http://localhost:3000/users'
const URL_USER = 'http://localhost:3000/user'

export default  class App extends React.Component{
  state = {
    currentGame: {},
    currentUser: null,
    username: null,
    password: null,
  }

displayGame = (title) => {
  console.log('hits')

  fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${title}`, {

      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
      }
    })
      .then(response => response.json())
      .then(game => this.setState({currentGame: game})  )
      .then(game => {return (

        <Switch>
          <Route path='/games/details/:id' render={ () => { return <GameDetails game={this.state.currentGame}/> }} />
        </Switch>

      )})
      .catch(err => {
          console.log(err);
      });
}

// setCurrent = (game) => {
//   this.setState({currentGame: game})
// }


// start handleLogin
handleUsernameChange = e => {
  console.log('I am ', e.currentTarget.value);
  this.setState({
    username: e.currentTarget.value
  })
}
//doge

handlePasswordChange = e => {
  console.log('and my password is ', e.currentTarget.value);
  this.setState({
    password: e.currentTarget.value
  })
}


handleLogin = e => {
  e.preventDefault()
  console.log('log me in please you MF developer ', e)
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({username: this.state.username, password:this.state.password})
  }
  fetch(URL_USER+'/login', obj)
  .then(res => res.json())
  .then(currentUser => console.log(currentUser))
  .catch(err => console.warn(err.message))
}
// end handleLogin


  render(){
    return (
      <div className="App">

        <Head />

        <Switch>

          <Route path='/search' render={ () => { return <SearchContainer setCurrent={this.setCurrent} displayGame={this.displayGame}/>}}/>
          <Route path='/users' component={UserList}/>
          <Route path='/login' render={ () => <Login
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
            />}
          />
          <Route path='/:name' component={ GameDetails    }/>
          <Route path='/users/:id' component={ UserDetails }/>
          <Route path='/' render={() => {   return <Home/>   }}/>

        </Switch>

      </div>
    )
  }
}
