import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from '../components/login-page';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Note Mate</h1>
          <LoginPage />
      </div>
    );
  }
}

export default App;
