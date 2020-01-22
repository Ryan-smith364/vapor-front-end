import React from 'react';
import {Container, Card, Icon, Image} from 'semantic-ui-react'
import Moment from 'moment'

export default class User extends React.Component{
  render(){
   console.log(this.props.user)
    return (
        <Container>
          <Card>
            <Image alt={this.props.user.username} src={this.props.user.user_avatar} size='medium'/>
            <Card.Content>
              <Card.Header>{this.props.user.first_name} {this.props.user.last_name}</Card.Header>
              <Card.Meta>
                <Icon name='birthday' />
                <span className='date'>Birthday {Moment(this.props.user.birthdate).format('MMMM Do YYYY')}
                </span>
              </Card.Meta>
              <Card.Description>
                {this.props.user.bio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='mail' />
                {this.props.user.email}
              </a>
              <Card.Meta>
                <Icon name='user' />
                Username: {this.props.user.username}
              </Card.Meta>
            </Card.Content>

      {/* start */}
        { this.props.user === this.props.currentUser ?
       
          //   user wishlist 
       <div>

          <h3>Wishlist</h3>
          <ul>

            {/* forEach game that's owned boolean that's false */}
            {/* {this.props.user.games.map(game => <li>{game.name}</li>)} */}

           </ul>

       </div> 
        : null }


   {/* end */}
       
       <div>
        <h3>Owned</h3>
            {/* user owned games */}

        <ul>
            {/* forEach game that's owned boolean that's true */}
           {/* {this.props.user.games.map(game => <li>{game.name}</li>)} */}
        </ul>
      </div>
      
          </Card>
       </Container>
    )

  }

}

