import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'



export default  class ApiGameCard extends React.Component{
  render(){
    
    return (
        <div className="card">
           <Card size="huge">
            <Image src={this.props.game.background_image} wrapped ui={true} size='huge' />
            <Card.Content>
              <Card.Header onClick={ () => this.props.displayGame(this.props.game.slug)}>{this.props.game.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{this.props.game.released}</span>
              </Card.Meta>
              <Card.Description>
                
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
    )

  }

}