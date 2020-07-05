import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'



export default  class UserGameCard extends React.Component{
  render(){

    return (
      // <Card.Group>
        <div className="card">
           <Card onClick={ () => this.props.setGame(this.props.game)}>
            <Image src={this.props.game.background_image} wrapped ui={true} size='huge' />
            <Card.Content>
              <Card.Header >
                <Link to={`/userGames/details/${this.props.game.id}`} game={this.props.game}> {this.props.game.name} </Link>
              </Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.game.release}</span>
              </Card.Meta>
              <Card.Description>

              </Card.Description>
            </Card.Content>
          </Card>
         </div>
    //  </Card.Group>
    )

  }

}
