import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


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
  
  render() {
    return (
      <div>
        <Router>
          <Grid container justify='center' alignItems='center'>
            <div className="content">
              <Switch>
                <Route exact path="/" render={()=>
                  <MainView reservations={this.state.reservations} pastReservations={this.state.pastReservations} />
                }
                />
                <Route path="/reservation" component={ReservationView} />
                <Route path="/login" component={LoginView} />
              </Switch>
            </div>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
