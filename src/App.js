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
const URL_USERS = 'http://localhost:3001/users'
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
      .then()
      .then(currentGame => this.setState({currentGame}))
      .catch(err => {
          console.log(err);
      });
}

// setCurrent = (game) => {
//   this.setState({currentGame: game})
// }


// start handleLogin
handleUsernameChange = e => {
  // console.log('I am ', e.currentTarget.value);
  this.setState({
    username: e.currentTarget.value
  })
}
//doge

handlePasswordChange = e => {
  // console.log('and my password is ', e.currentTarget.value);
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
  .then(currentUser => {
    if (currentUser) {

    }
  })
  .catch(err => console.warn(err.message))
}
// end handleLogin

//handle SignUp
handleFirstNameChange = e => {
  console.log(e.currentTarget.value)
}
handleLastNameChange = e => {
  console.log(e.currentTarget.value)
}
handleUsernameChangeSU = e => {
  console.log(e.currentTarget.value)
}
handlePasswordChangeSU = e => {
  console.log(e.currentTarget.value)
}
handleEmailChange = e => {
  console.log(e.currentTarget.value)
}
handleAvatarChange = e => {
  console.log(e.currentTarget.value)
}
handleBirthdateChange = e => {
  console.log(e.currentTarget.value)
}
handleBioChange = e => {
  console.log(e.currentTarget.value)
}
//doge
hanleSignup = e => {
  console.log('Need to do a post fetch to singup the new user')
  e.preventDefault()
  e.currentTarget.reset()
}
//end SignUp

  render(){
    return (
      <div className="App">

        <Head user={this.state.currentUser}/>

        <Switch>

          <Route path='/search' render={ () => (this.state.currentGame === {}) ?
            <Redirect to={`/games/details/${this.state.currentGame.id}`}
            render={ () =>  <GameDetails game={this.state.currentGame}/> }
             />
            :
           <SearchContainer
            displayGame={this.displayGame}

            />
          }/>
          <Route path='/users' component={UserList}/>
          <Route path='/login' render={ () => <Login
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
           />}
          />
          <Route path='/signup' render={()=>  <SignUp
            handleFirstNameChange={this.handleFirstNameChange}
            handleLastNameChange={this.handleLastNameChange}
            handleUsernameChangeSU={this.handleUsernameChangeSU}
            handlePasswordChangeSU={this.handlePasswordChangeSU}
            handleEmailChange={this.handleEmailChange}
            handledAvatarChange={this.handledAvatarChange}
            handledBioChange={this.handledBioChange}
            handleBirthdateChange={this.handleBirthdateChange}
            hanleSignup={this.hanleSignup}
            /> }
          />
          <Route path='/profile' render={() => {return <UserDetails
              user={this.state.currentUser}/>
          }}/>

          <Route path='/:name' component={ GameDetails    }/>
          <Route path='/users/:id' component={ UserDetails }/>
          <Route path='/' render={() => {   return <Home/>   }}/>
        </Switch>

      </div>
    )
  }
}
