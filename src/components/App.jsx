import React, {Component} from 'react'
import {data} from '../Data/users.js'
import { AddUserForm } from './AddUserForm/AddUserForm.js';
import {Userlist} from './User/Users'
import { nanoid } from 'nanoid';



class App extends Component   {
  state = {
    users: data,
  };


  // deleteUser = userId => {
  //   this.setState(prevState => 
  //     ({users: prevState.users.filter(({id}) => id !== userId),}))};

  addUser = (userData) => {
    const newUser = {
      id: nanoid(),
      ...userData, 
    }
    this.setState(prevState => ({users: [newUser, ...prevState.users]}))
  }
      
  render () {
    const {users} = this.state
  return (
   <div>
    {/* < Userlist users={users} deleteUser={this.deleteUser}/> */}
    < AddUserForm addUser={this.addUser}/>
   </div>
  );
};
}

export default App;