import React from 'react';
import {Container, Card, Icon, Image} from 'semantic-ui-react'

export default class User extends React.Component{
  render(){
   console.log(this.props.user)
    return (
        <Container>
          <Card>
            <Image alt={this.props.user.username} src={this.props.user.user_avatar} size='small'/>
            <Card.Content>
              <Card.Header>{this.props.user.first_name} {this.props.user.last_name}</Card.Header>
              <Card.Meta>
                <span className='date'>Birthday {this.props.user.birthdate}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.user.bio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='email' />
                {this.props.user.email}
              </a>
              <Card.Meta>
                <span>Username: {this.props.user.username}</span>
              </Card.Meta>
            </Card.Content>

        {/* start */}
        {/* { this.props.user === this.props.currentUser ? */}

           {/*<ul>*/}
            {/* forEach game that's owned boolean that's false */}
            {/* {this.props.user.games.map(game => <li>{game.name}</li>)} */}
          {/*</ul>*/}

        {/* </div> : null */}


        {/* end */}


         {/* user owned games */}

          {/*<ul>*/}
             {/* forEach game that's owned boolean that's true */}
            {/* {this.props.user.games.map(game => <li>{game.name}</li>)} */}
          {/*</ul>*/}
          </Card>
       </Container>
    )

  }

}
