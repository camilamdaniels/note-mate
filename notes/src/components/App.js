import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from '../components/login-page';
import NewUserForm from '../components/new-user-form';
import Notes from '../components/notes';
import Note from '../components/note';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/index';
import { withRouter } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Note Mate</h1>
          {this.props.error ? <h3>Error Fetching Notes</h3> : null}
          <Route path="/" component={LoginPage} exact/>
          <Route path="/newuserform" component={NewUserForm} exact/>
          <Route path="/notes" component={Notes} exact/>
          <Route path="/notes/:id" component={Note}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { notesReducer } = state;
  return {
    error: notesReducer.error
  };
};

export default withRouter(connect(mapStateToProps, { fetchNotes })(App));
