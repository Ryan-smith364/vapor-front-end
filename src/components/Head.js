import React from 'react';
import {Header} from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class Head extends React.Component{
  render(){
    return (
      <Header as='h2'>
      {/* <Icon name='settings' /> */}
      <Header.Content>
        <Link to='/'>Vapor</Link>
        <Header.Subheader>For All You Gaming Needs</Header.Subheader>
      </Header.Content>

      <Menu>
        <Menu.Item
          name='search-games'

          // onClick={this.handleItemClick}
        >
          <Link to='/search'>Search Games</Link>
        </Menu.Item>

        <Menu.Item
          name='users'

          // onClick={this.handleItemClick}
        >
          <Link to='/users'>Find A User</Link>
        </Menu.Item>

        {this.props.user !== null ? <Menu.Item
          name='profile'

          // onClick={this.handleItemClick}
        >
           <Link to='/profile'>Profile</Link>
        </Menu.Item> : null}

        <Menu.Menu position='right'>
          {this.props.user !== null ? <Menu.Item>
            <Link onClick={this.props.handleLogOut}>Login Out</Link>
          </Menu.Item>:<Menu.Item>
            <Link to='/login'>Login</Link>
          </Menu.Item>  }
          {this.props.user === null ? 
          <Menu.Item>
            
            {/* // active={activeItem === 'logout'} */}

          <Link to='/signup'>SignUp</Link>
            </Menu.Item>
           : null }
          

        </Menu.Menu>
      </Menu>

    </Header>

    )

  }


}