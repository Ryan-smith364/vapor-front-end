import React from 'react';
import './App.css';
import Header from './components/Head'
import MainView from './containers/MainView'
import 'semantic-ui-css/semantic.min.css'

export default  class App extends React.Component{
  render(){
    return (
      <div className="App">
       
        <MainView/>
       
      </div>
    )
  }
}


