import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'



export default  class UserCard extends React.Component{
  render(){
    
    return (
       <div className="card">
           <Card size="huge"  onClick={()=> this.props.viewUser(this.props.user)}>
            <Image src={this.props.user.user_avatar} wrapped ui={true} size='huge' />
            <Card.Content>
              <Card.Header >  <Link to={`/users/${this.props.user.id}`}>{this.props.user.username}</Link> </Card.Header>
              <Card.Description>
                
              </Card.Description>
            </Card.Content>
          </Card>
      </div>
    )

  }

}