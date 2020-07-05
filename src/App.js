import React from 'react';
import './App.css';
import Head from './components/Head'
import 'semantic-ui-css/semantic.min.css'
import {Route, Redirect, Switch} from 'react-router-dom'
import UserGameDetails from './components/userGameDetails'
import SearchContainer from './containers/SearchContainer'
import ApiGameDetails from './components/ApiGameDetails'
import UserList from './containers/UserList'
import UserDetails from './components/UserDetails'
import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
const URL_USERS = 'http://localhost:3000/users'
const URL_USER = 'http://localhost:3000/user'
const URL_GAMES = 'http://localhost:3000/games'
const URL_USER_GAMES = 'http://localhost:3000/user_games'


export default  class App extends React.Component{
  state = {
    currentGame: {},
    currentUser: null,
    userGames: [],
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
    // homeGames: null,
    // wishlist: false,
    // finished: false,
    // user_what: null,

  }

  setGame = (game) => {
    this.setState({currentGame: game})
  }
  
  componentDidMount(){
    fetch(URL_USERS)
    .then(resp => resp.json())
    .then(users => this.setState({userList: users}))
    .then(games => this.setHomeGames())
    .catch(err => console.warn(err.message))
  }

  setHomeGames = () => {
  
    fetch(`https://rawg-video-games-database.p.rapidapi.com/games?page=5&page_size=5`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
    }
  })
  .then(response => response.json())
  .then(results => this.setState({homeGames: results.results}))
  .catch(err => console.log(err.message) )

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

viewUser = (selectedUser) => {
  this.setState({selectedUser})
}

// start handleLogin
handleUsernameChange = e => {

  this.setState({
    username: e.currentTarget.value
  })
}

handlePasswordChange = e => {
  
  this.setState({
    password: e.currentTarget.value
  })
}

handleLogin = e => {
  e.preventDefault()
  console.log('log me in please you MF developer ')
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
    if (currentUser.message !== 'Incorrect User or password!'){
      this.setState({currentUser})
      this.setState({userGames: currentUser.games})
    }else {
      alert('Wrong username or password')
    }
  })
  .catch(err => console.warn(err.message))
}
// end handleLogin

//handle SignUp
handleSUChange = e => {

  console.log(e.currentTarget.value)
  this.setState({ newUser: {
    ...this.state.newUser,
    [e.currentTarget.name]: e.currentTarget.value}
  })
}

handleDOBChange = date => {
    this.setState({newUser: {
      ...this.state.newUser,
      birthdate: date
    }
  })
}

handleSignup = e => {
  
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
  .then(newUser => {
    this.setState({currentUser: newUser})
    this.setState({userList: [...this.state.userList, newUser]})
  })
  .catch(err => console.warn(err))
}
//end SignUp

handleLogOut = () =>{
  this.setState({currentUser: null})
  this.setState({username: null})
  this.setState({password: null})
}

handleSaveGame = (e, game) => {
  e.preventDefault()
  const {id: api_id, slug, name, description_raw , genres, platforms, publishers, clip, released , rating, background_image} = game
  const genresToSave = genres.map(g => g.name).join()
  const platformsToSave = platforms.map(p  => p.platform.name).join()
  const publishersToSave = publishers.map(p => p.name).join()
  let clipToSave

  if (clip === null){ clipToSave = null} else{ clipToSave = clip.clip }

  console.log(background_image)
  console.log(rating)
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      name: name,
      slug: slug,
      api_id: api_id,
      description: description_raw,
      genres: genresToSave,
      platforms: platformsToSave,
      publisher: publishersToSave,
      clip: clipToSave,
      release: released,
      rating: rating.toString(),
      background_image: background_image
    })
  }

  fetch(URL_GAMES, obj)
  .then(res => res.json())
  .then(savedGame => {
    console.log('saved game is: ',savedGame)
    console.log('game id is:', savedGame.id)
    console.log('user id is:', this.state.currentUser.id)
    const gameID = savedGame.id
    const userID = this.state.currentUser.id
    const userWhat = (this.state.user_what === 'wishlist') ? true : false
    const addUserGame = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user_id: userID,
        game_id: gameID,
        user_what: userWhat,
      })
    }
    fetch(URL_USER_GAMES, addUserGame)
    .then(res => res.json())
    .then(userGame => this.setState({userGames: [...this.state.userGames, game]}))
    .catch(err => console.warn(err))
  })
  .catch(err => console.warn(err.message))
}

// handleWhislist = e => {
//   console.log('user what is ', e.currentTarget.firstElementChild.value)
//   console.log(e)
//   // this.setState({
//   //   // wishlist: !this.state.wishlist,
//   //   // user_what: e.currentTarget.firstElementChild.value
//   // })
// }

  render(){
    return (
      <div className="App">

        <Head user={this.state.currentUser} handleLogOut={this.handleLogOut}  
            handleSUChange = {this.handleSUChange}
            userAvatar = {this.state.newUser.user_avatar}
            handleDOBChange={this.handleDOBChange}
            handleSignup={this.handleSignup}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleLogin={this.handleLogin}
            />

        <Switch>

          <Route path='/users/:id' render={() => <UserDetails user={this.state.selectedUser} games={this.state.userGames}/> }/>
          <Route path={`/games/details/${this.state.currentGame.id}`} render={() => <ApiGameDetails
            key={this.state.currentGame.id}
            game={this.state.currentGame} currentUser={this.state.currentUser}
            handleSaveGame= {this.handleSaveGame}
            handleWhislist={this.handleWhislist}
            userWhat= {this.state.user_what}
            /> }
          />
             <Route path={`/userGames/details/${this.state.currentGame.id}`} render={() => <UserGameDetails
            key={this.state.currentGame.id}
            game={this.state.currentGame} currentUser={this.state.currentUser}
            /> }
          />
          <Route path='/search' render={ () =>
            <SearchContainer  displayGame={this.displayGame}/>
          }/>
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
            handleSignup={this.handleSignup}
            /> }
          />
          <Route path='/profile' render={() => (this.state.currentUser === null)
            ? <Redirect to={'/login'} /> 
            : <UserDetails user={this.state.currentUser} currentUser={this.state.currentUser} games={this.state.userGames} setGame={this.setGame}/>
          }/>
          <Route path='/' render={() => <Home games={this.state.homeGames} displayGame={this.displayGame}/>}/>

        </Switch>

      </div>
    )
  }
}
