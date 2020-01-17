import React from 'react'

const SignUp = (props) => {
  return (
    <form className="ui mini form" onSubmit={(e) => {
      // props.hideForm()
      props.handleLogin(e)
    }}>
      <div className="two fields">
        <div className="field">
          <label>First Name</label>
          <input placeholder="First Name" type="text" onChange={props.handleUsernameChange} required/>
        </div>
        <div className="field">
          <label>Password</label>
          <input placeholder="Password" type="password" onChange={props.handlePasswordChange} required/>
        </div>
      </div>
      <input type='submit' className="ui submit button" value='Login'/>
      <input type='button' className="ui submit button" onClick={props.hideForm} value='Cancel'/>
    </form>
  )
}

export default SignUp