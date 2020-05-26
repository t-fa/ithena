import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Dashboard from './containers/Dashboard';
import Control from './containers/Control';

class App extends Component {
  state = {
    username: '',
    loggedIn: false,
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === 'Ankit') {
      this.setState({ loggedIn: true });
    }
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    let login = (
      <Auth
        username={this.state.username}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
    let authed = (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/control" component={Control} />
      </Switch>
    );
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar logOut={this.logOut} auth={this.state.loggedIn} />
          {this.state.loggedIn ? authed : login}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
