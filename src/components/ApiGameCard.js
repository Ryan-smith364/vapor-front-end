import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'



export default  class ApiGameCard extends React.Component{
  render(){

    return (
      // <Card.Group>
        <div className="card">
           <Card onClick={ () => this.props.displayGame(this.props.game.slug)}>
            <Image src={this.props.game.background_image} wrapped ui={true} size='huge' />
            <Card.Content>
              <Card.Header >
                <Link to={`/games/details/${this.props.game.id}`} game={this.props.game}> {this.props.game.name} </Link>
              </Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.game.released}</span>
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
