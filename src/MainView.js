import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Navbar from './Navbar';
import ResCard from './ReservationCard';
import Button from 'material-ui/Button';
import PlusIcon from 'mui-icons/cmdi/plus';

const plusStyle = {
  position: 'fixed',
  zIndex: 999,
  right: '37%',
  top: '7%' //Not working obvs

}

export default class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <header className="App-header">
          <Navbar />
          <div className="App-title">Your Doctor</div>
        </header>
        <Button className="Add-button" fab color="primary" aria-label="add" style={plusStyle}>
          <PlusIcon />
        </Button>
        <div className="MainView-Content">
          <div className="MainView-Spacer"></div>
          <ResCard />
          <div className="MainView-Spacer"></div>
          <ResCard />
          <div className="MainView-Spacer"></div>
          <ResCard />
          <hr className="style2" />
          <ResCard />
          <div className="MainView-Spacer"></div>
        </div>
      </div>
    );
  }
}
