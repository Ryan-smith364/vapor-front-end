import React from 'react';
import {Header} from 'semantic-ui-react';
import { Menu, Modal, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp';

export default class Head extends React.Component{
  render(){
    return (
      <Header as='h2'>
      {/* <Icon name='settings' /> */}
      <Header.Content>
        <Link to='/' > <img src="https://i.ibb.co/yWyJGCs/vaporlogo.png" alt="vaporlogo" border="10"/> </Link>
        <Header.Subheader >For All You Gaming Needs</Header.Subheader>
      </Header.Content>
      <Menu>
      <Menu.Item>
          <img alt='logo' src='https://i.ibb.co/CVbKMVk/vapor-logo.png' />
        </Menu.Item>

        <Menu.Item
          name='search-games'
        >
          <Link to='/search'>Search Games</Link>
        </Menu.Item>

        <Menu.Item
          name='users'
        >
          <Link to='/users'>Find A User</Link>
        </Menu.Item>

        {this.props.user !== null ? <Menu.Item
          name='profile'
        >
           <Link to='/profile'>Profile</Link>
        </Menu.Item> : null}

        <Menu.Menu position='right'>
          {this.props.user !== null ? <Menu.Item>
            <Link onClick={this.props.handleLogOut}>Login Out</Link>
          </Menu.Item>:<Menu.Item>
          <Modal trigger={<Button >Login</Button>} closeIcon>
                <Modal.Content>
                   <Login
                    handleUsernameChange={this.props.handleUsernameChange}
                    handlePasswordChange={this.props.handlePasswordChange}
                    handleLogin={this.props.handleLogin}
                   />
                </Modal.Content>
             </Modal>
          </Menu.Item>  }
          {this.props.user === null ? 
          <Menu.Item>
             <Modal trigger={<Button >SignUp</Button>} closeIcon>
                <Modal.Content>
                   <SignUp  
                    handleSUChange = {this.props.handleSUChange}
                    handleDOBChange={this.props.handleDOBChange}
                    handleSignup={this.props.handleSignup}/>
                </Modal.Content>
             </Modal>
          </Menu.Item>
           : null }
    
        </Menu.Menu>
      </Menu>

    </Header>

    )

  }


}