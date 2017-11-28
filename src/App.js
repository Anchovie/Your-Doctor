import React, { Component } from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpandedCardView from './ExpandedCardView';
import dateFormat from 'dateformat';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: "main",
      reservations: [
        {
          date: dateFormat(new Date(2017, 11, 28, 12, 30)),
          doctor: 'Tohtori Tolonen',
          occupation: 'Ylilääkäri',
          bodyPart: 'head',
          symptoms: 'nausea',
          text: 'Kauhee darra! Mikä eteen????',
          id: 0,
       },
       {
         date: dateFormat(new Date(2017, 12, 29, 8, 15)),
         doctor: 'Dogtori',
         occupation: 'Iholääkäri',
         bodyPart: 'limbs',
         symptoms: 'eczema',
         text: 'Mul on atooppinen iho, antakaa rasvoja halvalla!',
         id: 1,
       }
     ],
     pastReservations: [
       {
         date: dateFormat(new Date(2017, 12, 2, 10, 30)),
         doctor: 'Tohtori Tolonen',
         occupation: 'Darralääkäri',
         bodyPart: 'torso',
         symptoms: 'heart problems',
         text: 'Sydämeen sattuu, joko darra tai delaamassa.',
         id: 2,
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
                  <MainView reservations={this.state.reservations}
                    pastReservations={this.state.pastReservations}
                  />
                }/>
                <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} />} />
                <Route path="/login" component={LoginView} />
                <Route path="/appointment/:id" render={(routeProps) => <ExpandedCardView data={this.state.reservations[routeProps.match.params.id]} /> }/>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
