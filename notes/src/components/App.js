import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from '../components/login-page';
import NewUserForm from '../components/new-user-form';
import Notes from '../components/notes';
import Note from '../components/note';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Note Mate</h1>
          <Route path="/" component={LoginPage} exact/>
          <Route path="/newuserform" component={NewUserForm} exact/>
          <Route path="/notes" component={Notes} exact/>
          <Route path="/notes/:id" component={Note}/>
      </div>
    );
  }
}

export default App;
