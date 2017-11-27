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
      reservations: [
        {
          date: Date.now(),
          doctor: 'Tohtori Tolonen',
          bodyPart: 'head',
          symptoms: 'nausea',
          text: 'Kauhee darra! Mikä eteen????'
       },
       {
         date: Date.now()+5000,
         doctor: 'Dogtori',
         bodyPart: 'limbs',
         symptoms: 'eczema',
         text: 'Mul on atooppinen iho, antakaa rasvoja halvalla!'
       }
     ],
     pastReservations: [
       {
         date: Date.now()-23000,
         doctor: 'Tohtori Tolonen',
         bodyPart: 'torso',
         symptoms: 'heart problems',
         text: 'Sydämeen sattuu, joko darra tai delaamassa.'
       }
     ]
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
              reservations={this.state.reservations}
              pastReservations={this.state.pastReservations}
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
