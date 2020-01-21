import React from 'react';
import './App.css';
import Head from './components/Head'
// import MainView from './containers/MainView'
import 'semantic-ui-css/semantic.min.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import SearchContainer from './components/SearchContainer'
import GameDetails from './components/GameDetails'
import UserList from './containers/UserList'
import UserDetails from './components/UserDetails'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
const URL_USERS = 'http://localhost:3000/users'
const URL_USER = 'http://localhost:3000/user'

export default  class App extends React.Component{
  state = {
    currentGame: {},
    selectedUser: null,
    currentUser: null,
    username: null,
    password: null,
    userList: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => this.setState({userList: users}))
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
      .then(currentGame => this.setState({currentGame}))
      .catch(err => {
          console.log(err);
      })
}

// setCurrent = (game) => {
//   this.setState({currentGame: game})
// }

viewUser = (selectedUser) => {
  this.setState({selectedUser})
}


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
  .then(currentUser =>{ if (currentUser.message !== "user not found"){ this.setState({currentUser})}})
  .catch(err => console.warn(err.message))
}
// end handleLogin


  render(){

      

    return (
      <div className="App">

        <Head user={this.state.currentUser}/>

        <Switch>

          <Route path={`/games/details/${this.state.currentGame.id}`} component={GameDetails} game={this.state.currentGame}/>
          <Route path='/search' render={ () =>
          //   <Redirect to={`/games/details/${this.state.currentGame.id}`}
          //   render={ () =>  <GameDetails game={this.state.currentGame}/> }
          //    /> 
          //   :
           <SearchContainer 
            displayGame={this.displayGame}/>
          }/>
          <Route path='/users/:id' render={() => <UserDetails user={this.state.selectedUser}/> }/>
          <Route path='/users' render={() => <UserList users={this.state.userList} viewUser={this.viewUser}/> } />
          <Route path='/login' render={ () => <Login
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
           />}
          />
          
          <Route path='/profile' render={() => {return <UserDetails 
              user={this.state.currentUser}/> 
          }}/>

          <Route path='/:name' component={ GameDetails    }/>
          <Route path='/' render={() => {   return <Home/>   }}/>
          <Route path='/signup' render={()=>  <SignUp/> }/>
        </Switch>

      </div>
    )
  }
}
