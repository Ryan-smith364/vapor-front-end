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


export default  class App extends React.Component{
  render(){
    return (
      <div className="App">

        <Head/>

        <Switch>

          <Route path='/search' component={SearchContainer}/> 
          <Route path='/users' component={UserList}/>
          <Route path='/login' component={ Login  }/>
          <Route path='/:name' component={ GameDetails    }/>
          <Route path='/users/:id' component={ UserDetails }/>
          <Route path='/' render={() => {   return <Home/>   }}/>

        </Switch>
       
      </div>
    )
  }
}


