import React from 'react';
import './App.css';
import Head from './components/Head'
import MainView from './containers/MainView'
import 'semantic-ui-css/semantic.min.css'
// import {BrowserRouter as Route, Switch} from 'react-router-dom'


export default  class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Head/>
        
        <MainView/>
       
      </div>
    )
  }
}


