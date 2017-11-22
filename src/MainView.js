import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Navbar from './Navbar';


export default class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <header className="App-header">
          <Navbar />
          <h1 className="App-title">Your Doctor</h1>
        </header>
        <p className="App-intro">
          tekstii toisesta filusta
        </p>
      </div>
    );
  }
}
