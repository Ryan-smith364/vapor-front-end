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
              : <video src={this.props.game.clip.clip} controls></video>
            }
            <h3>{this.props.game.name}  </h3>
            <h4>Released: {this.props.game.released}</h4>
            <h5>Rating: {this.props.game.rating}</h5>
            {this.props.game.publishers.map(pub =>  <div> {pub.name}</div> )}
            {/* <div onClick={() => this.props.getProducer(pub.name)}> {pub}</div>  */}
            <h5>Genre(s) </h5>
            { this.props.game.genres.map(genre => <div> {genre.name} </div>) }
            <h5> Platforms:</h5>
            {this.props.game.platforms.map(platform => <div>{platform.platform.name} </div>)}<br></br>
            <p>{this.props.game.description_raw}</p>
          </div>

          {this.props.currentUser !== null
            ? <Form onSubmit={e =>this.props.handleSaveGame(e, this.props.game)}>
                <Form.Field control={Button}
                  type='submit'
                  >Add To Wishlist
                </Form.Field>
              </Form>
            : null
          }
        </Container>

        )

    }

}
