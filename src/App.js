import React, { Component } from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpandedCardView from './ExpandedCardView';


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

  setNewAppointment = (appointment) => {
    this.setState()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <main className="content">
              <Switch>
                <Route exact path="/" render={()=>
                  <MainView reservations={this.state.reservations} pastReservations={this.state.pastReservations} />
                }
                />
                <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} />} />
                <Route path="/login" component={LoginView} />
                <Route path="/appointment/:id" component={ExpandedCardView} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
