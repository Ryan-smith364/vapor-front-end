import React from 'react'
import {
  Container,
  Button,
  Form,
  Input,

} from 'semantic-ui-react'


const Login = props => {
  return (
    <Container>
      <Form onSubmit={e => props.handleLogin(e)}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Username'
            placeholder='Username'
            onChange={props.handleUsernameChange}
            required
          >
          </Form.Field>
          <Form.Field
            control={Input}
            type='password'
            label='Password'
            placeholder='Password'
            onChange={props.handlePasswordChange}
            required
          >
          </Form.Field>

          </Form.Group>
          <Form.Group>
        
          <Form.Field
            control={Button}
            type='submit'
          >Submit
          </Form.Field>
          <Form.Field
            control={Button}
            type='button'
            onClick={props.hideForm}
          >Cancel
          </Form.Field>
          
        </Form.Group>
      </Form>
    </Container>

  )
}

export default Login
