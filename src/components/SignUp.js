import React from 'react'
import {
  Container,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  Card,
  TextArea,
} from 'semantic-ui-react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
class SignUp extends React.Component{
  state = {
    startDate: new Date(),
    defaultAvatar: 'https://uybor.uz/borless/uybor/img/user-images/user_no_photo_300x300.png',

  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render(){
    return (
      <Container>
        <Form onSubmit={e => this.props.hanleSignup(e)}>
          <Form.Group >
            <Form.Field
              control={Input}
              label='First name'
              placeholder='First name'
              name='first_name'
              onChange={this.props.handleSUChange}
              required
            />
            <Form.Field
              control={Input}
              label='Last name'
              placeholder='Last name'
              name='last_name'
              onChange={this.props.handleSUChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
            control={Input}
            label='Username'
            placeholder='Username'
            onChange={this.props.handleUsernameChangeSU}
            required
            />
            <Form.Field
            control={Input}
            type='password'
            label='Password'
            placeholder='Password'
            onChange={this.props.handlePasswordChangeSU}
            required
            />
          </Form.Group>

          <Form.Group>
            <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='username@example.com'
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
            />
            <Card color='grey' image={this.state.defaultAvatar} />
          </Form.Group>
          <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          />
          <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
          />
          <Form.Field
            control={Checkbox}
            label='I agree to the Terms and Conditions'
          />
          <Form.Field control={Button}
            type='submit'
          >Submit
          </Form.Field>
        </Form>
      </Container>
    )
  }
}

export default SignUp
