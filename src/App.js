import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const userNames=['Baz','Bar','Foo','widget','gatget']

const UsersList =({users})=>{
  if(users.length>0){
    return (
      <ul>
        {users.map(user=> <li key={user}>{user}</li>)}
      </ul>
    )
  }

  return(
    <p>No results!</p>
  );
}

class Users extends React.Component{
  constructor(){
    super();

    this.state={
      filteredUsers:userNames
    }
  }

  filterUsers(e){
    const text=e.currentTarget.value;
    const filteredUsers=this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }

  getFilteredUsersForText(text){
    return userNames.filter(user=>
    user.toLowerCase().includes(text.toLowerCase()))
  }

  render(){
    return(
      <div>
         <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    )
  }
}



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Users/>
      </div>
    );
  }
}

export default App;
