import React from 'react';

export default class User extends React.Component{
  render(){
   console.log(this.props.user)
    return (
       <div>
        <div>
          <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
          <h4>{this.props.user.username}</h4>
          <img src={this.props.user.user_avatar}/> 
          <p>{this.props.user.bio}</p>
          <h5>{this.props.user.email}</h5>
          <h5>{this.props.user.birthdate}</h5> 
        </div>

        {/* start */}
        { this.props.user === this.props.currentUser ?
       
        //   user wishlist 
        <div>
          <h3>Wishlist</h3>
          <ul>
            {/* forEach game that's owned boolean that's false */}
            
            {/* {this.props.user.games.filter(game => game.wishlist === true).map(game => <li>{game.name}</li>)} */}
          </ul>

        </div> 
        : null }

        
        {/* end */}
        <div>
        <h3>Owned</h3>
         {/* user owned games */}

          <ul>
             {/* forEach game that's owned boolean that's true */}
            {/* {this.props.user.games.filter(game => game.wishlist === false).map(game => <li>{game.name}</li>)} */}
          </ul> 
        </div>

       </div>
    )

  }

}

