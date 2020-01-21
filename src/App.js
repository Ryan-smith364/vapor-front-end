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
    currentUser: null,
    username: null,
    password: null,
    userList: [],
    newUser: {
      first_name: null,
      last_name: null,
      username: null,
      password: null,
      email: null,
      birthdate: new Date(),
      bio: null,
      user_avatar: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_300x300.png',
    }
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
  .then(currentUser =>{ if (currentUser.message !== "user not found"){    this.setState({currentUser})}})
  .catch(err => console.warn(err.message))
}
// end handleLogin

//handle SignUp
handleSUChange = e => {
  // debugger
  console.log(e.currentTarget.value)
  this.setState({ newUser: {
    ...this.state.newUser,
    [e.currentTarget.name]: e.currentTarget.value}
  })
}
//doge
handleDOBChange = date => {
    this.setState({newUser: {
      ...this.state.newUser,
      birthdate: date
    }
  })
}
//doge
hanleSignup = e => {
  console.log('Need to do a post fetch to singup the new user', this.state.newUser)
  e.preventDefault()
  const newUser = {...this.state.newUser}
  console.log('newUser', newUser)
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({newUser})
  }
  fetch(URL_USERS, obj)
  .then(res => res.json())
  .then(newUser => console.log(newUser))
  .catch(err => console.warn(err))
  // e.currentTarget.reset()
}
//end SignUp

handleLogOut = () =>{
  this.setState({currentUser: null})
  this.setState({username: null})
  this.setState({password: null})
}

  render(){

      
    
    return (
      <div className="App">

        <Head user={this.state.currentUser} handleLogOut={this.handleLogOut}/>

        <Switch>

          <Route path='/users/:id' render={() => <UserDetails user={this.state.selectedUser}/> }/>
          <Route path={`/games/details/${this.state.currentGame.id}`} render={() => <GameDetails game={this.state.currentGame} currentUser={this.state.currentUser}/> } />
          <Route path='/search' render={ () =>
            //   <Redirect to={`/games/details/${this.state.currentGame.id}`}
            //   render={ () =>  <GameDetails game={this.state.currentGame}/> }
            //    /> 
            //   :
            <SearchContainer 
            displayGame={this.displayGame}/>
          }/>
           <Route path='/profile' render={() => <UserDetails user={this.state.currentUser}/>}/>
          <Route path='/users' render={() => <UserList users={this.state.userList} viewUser={this.viewUser} /> }/>
          <Route path='/login' render={ () => <Login
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
           />}
          />
          <Route path='/signup' render={()=>  <SignUp
            handleSUChange = {this.handleSUChange}
            userAvatar = {this.state.newUser.user_avatar}
            handleDOBChange={this.handleDOBChange}
            hanleSignup={this.hanleSignup}
            /> }
          />

          <Route path='/:name' component={ GameDetails    }/>
          
          <Route path='/' render={() => {   return <Home/>   }}/>
        </Switch>

      </div>
    )
  }
}
