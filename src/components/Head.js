import React from 'react';
import {Header} from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react'

export default class Head extends React.Component{
  render(){
    return (
      <Header as='h2'>
      {/* <Icon name='settings' /> */}
      <Header.Content>
        Vapor
        <Header.Subheader>For All You Gaming Needs</Header.Subheader>
      </Header.Content>

      <Menu>
        <Menu.Item
          name='search-games'
          // active={activeItem === 'search-games'}
          // onClick={this.handleItemClick}
        >
          Search Games
        </Menu.Item>

        <Menu.Item
          name='users'
          // active={activeItem === 'users'}
          // onClick={this.handleItemClick}
        >
          Find A User
        </Menu.Item>

        <Menu.Item
          name='profile'
          // active={activeItem === 'profile'}
          // onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
      </Menu>

    </Header>
        // <Header as='h2' icon='plug' content='Uptime Guarantee' >
        //   <div> 
        //     <p><i>Logo</i></p>
        //   </div>
        //   <div>
        //     <h1>Vapor</h1>
        //   </div>
        //   <div>
        //     <button>Search</button>
        //     <button>Find User</button>
        //     <button>Profile</button>
        //   </div>
        // </Header>
    )

  }

}