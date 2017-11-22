import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Navbar from './Navbar';
import Button from 'material-ui/Button';
import Plus from 'mui-icons/cmdi/plus';


export default class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <header className="App-header">
          <Navbar />
          <h1 className="App-title">Your Doctor</h1>
        </header>
        <Button className="Add-button" fab color="primary" aria-label="add">
          <Plus />
        </Button>
        <p className="App-intro">
          tekstii toisesta filusta
        </p>
      </div>
    );
  }
}
