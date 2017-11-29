import React from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExpandedCardView from './ExpandedCardView';
import dateFormat from 'dateformat';


class App extends React.Component {

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
          price: '80 €',
          duration: '45 min',
          id: '0',
       },
       {
         date: dateFormat(new Date(2017, 12, 29, 8, 15)),
         doctor: 'Dogtori',
         occupation: 'Iholääkäri',
         bodyPart: 'limbs',
         symptoms: 'eczema',
         text: 'Mul on atooppinen iho, antakaa rasvoja halvalla!',
         price: '120 €',
         duration: '60 min',
         id: '1',
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
         price: '65 €',
         duration: '45 min',
         id: '2',
       }
     ]
    };
  }

  setNewAppointment = (reservationObject) => {
    let newReservation = {
      date: dateFormat(new Date(2017, 12, 24, 10, 0)),
      doctor: 'JoUlU PuKkI',
      occupation: 'Ravintoneuvoja',
      bodyPart: 'torso',
      symptoms: 'obesity',
      text: 'Liika kinkkua, maha kasvanu oudosti : /',
      id: '4',
    }
    this.setState(prevState => ({ reservations: prevState.reservations.concat([newReservation]) }));
    console.log(this.state.reservations);
  }

  cancelReservation = (reservation) => {
    this.setState(prevState => ({ reservations: prevState.reservations.filter(res => res.id != reservation.id )}));
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main className="content">
            <Switch>
              <Route exact path="/" render={()=>
                <MainView reservations={this.state.reservations}
                  pastReservations={this.state.pastReservations}
                  cancelReservation={this.cancelReservation}
                />
              }/>
              <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} />} />
              <Route path="/login" component={LoginView} />
              <Route path="/appointment/:id" render={(routeProps) => <ExpandedCardView appointment={this.state.reservations.find(res => res.id === routeProps.match.params.id)} cancelReservation={this.cancelReservation} /> }/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
