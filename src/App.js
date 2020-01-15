import React from 'react';
import './App.css';
import Header from './containers/head'
import MainView from './containers/MainView'

export default  class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header/>
        
        <MainView/>
      </div>
    )
  }
}


