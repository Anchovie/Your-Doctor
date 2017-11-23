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

  handleBackMenuClick = () => {
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
          {this.state.currentView === "main" &&
            <MainView
              handleNewReservationClick={this.handleNewReservationClick}
              handleHelpClick={this.handleHelpClick}
              handleLogoutClick={this.handleLogoutClick}
            />
          }
          {this.state.currentView === "reservation" &&
            <ReservationView handleBackMenuClick={this.handleBackMenuClick}/>
          }
      </Grid>
    );
  }
}

export default App;
