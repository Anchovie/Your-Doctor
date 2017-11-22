import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MUI from 'material-ui';
import Grid from 'material-ui/Grid';
import MainView from './MainView';

class App extends Component {
render() {
  return (
    <Grid container spacing={40}>
      <Grid item xs={8}>
        <MainView/>
      </Grid>
    </Grid>
  );
}
  /*
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
      </div>
    );
  }
  */
}

export default App;
