import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import MainView from './MainView';
import ReservationView from './ReservationView';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: "main",
    };
  }

  handleNewReservationClick = () => {
    this.setState({ currentView: "reservation" });
  }

  render() {
    return (
      <Grid container justify='center' alignItems='center'>
          {this.state.currentView === "main" && <MainView handleNewReservationClick={this.handleNewReservationClick}/>}
          {this.state.currentView === "reservation" && <ReservationView/>}
      </Grid>
    );
  }
}

export default App;
