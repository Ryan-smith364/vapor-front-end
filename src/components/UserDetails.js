import React from 'react';
import {Container, Card, Icon, Image, Grid} from 'semantic-ui-react'
import Moment from 'moment'
import UserGameCard from "./UserGameCard"

export default class User extends React.Component{
  render(){
   console.log(this.props.user)
    return (
      <Container className="cont">
        <Grid>
          <Grid.Row stretched padded='vertically'>
            <Grid.Column width={7} >
              <Container className="user">
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
                    <href>
                      <Icon name='mail' />
                      {this.props.user.email}
                    </href>
                    <Card.Meta>
                      <Icon name='user' />
                      Username: {this.props.user.username}
                    </Card.Meta>
                  </Card.Content>

            
            
                </Card>
            </Container>
          </Grid.Column>
        <Grid.Column width={7} >

      <Container className="wish">

                  { this.props.user === this.props.currentUser ? 
                <Card>
                  <Card.Content>
                  
                    <Card.Header>wishlist</Card.Header>
                  
                  </Card.Content>
                  <Card.Content>

                    <ul>

                        {this.props.currentUser.games ? this.props.games.map(game =>  <UserGameCard game={game} setGame={this.props.setGame}/> ) : null}

                    </ul>

                  </Card.Content>
                </Card>
              : null } 
          
            </Container>
          <Container className="own">
        </Container> 
      </Grid.Column>
       </Grid.Row>
      </Grid>
  </Container>

    )
  }
}
