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

  handleBackClick = () => {
    this.setState({ currentView: "main" });
  }

  handleLogoutClick = () => {
    this.setState({ currentView: "login" });
  }

  handleLoginClick = () => {
    this.setState({ currentView: "main" });
  }

  handleHelpClick = () => {
    this.setState({ currentView: "help" });
  }

  render() {
    return (
      <Grid container justify='center' alignItems='center'>
          {this.state.currentView === "main" && <MainView handleNewReservationClick={this.handleNewReservationClick}/>}
          {this.state.currentView === "reservation" && <ReservationView handleBackClick={this.handleBackClick}/>}
      </Grid>
    );
  }
}

export default App;
