import React from 'react';
// import Game from './GameCard'
import {
  Container,
  Button,
  Form,
    } from 'semantic-ui-react'

export default  class GameDetails extends React.Component{

    render(){
        // console.log(this.props)
        return (

        <Container>
          <h1> Gamer </h1>
          <div className="card bg-dark" style={{width: 31.5 + 'rem'}}>
            { this.props.game.clip === null
              ? <p>[No Preview Availible]</p>
              : <video src={this.props.game.clip} controls></video>
            }
            <h3>{this.props.game.name}  </h3>
            <h4>Released: {this.props.game.released}</h4>
            <h5>Rating: {this.props.game.rating}</h5>
            <div> {this.props.game.publishers}</div>
            <h5>Genre(s): </h5>
            <div> {this.props.game.genres} </div>
            <h5> Platforms:</h5>
             <div>{this.props.game.platform} </div><br></br>
           <p> {this.props.game.description}</p>
          </div>
          
        </Container>

        )

      }}
