import React from 'react';
import UserCard from '../components/UserCard';

export default  class UserList extends React.Component{
   render(){
       
   return ( 
      <div>
          <h1>User List</h1>
       <div className='ui grid'>

          {this.props.users.map(user => <UserCard key={user.id} user={user} viewUser={this.props.viewUser}/>)}
       </div> 
     </div>  
   ) 

 }

}