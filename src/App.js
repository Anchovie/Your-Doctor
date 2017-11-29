import React from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import ExpandedCardView from './ExpandedCardView';
import dateFormat from 'dateformat';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reservations: [
        {
          date: dateFormat(new Date(2017, 11, 28, 12, 30)),
          doctor: 'Tohtori Tolonen',
          occupation: 'Ylilääkäri',
          bodyPart: 'head',
          symptoms: 'nausea',
          extraInfo: 'Kauhee darra! Mikä eteen????',
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
         extraInfo: 'Mul on atooppinen iho, antakaa rasvoja halvalla!',
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
         extraInfo: 'Sydämeen sattuu, joko darra tai delaamassa.',
         price: '65 €',
         duration: '45 min',
         id: '2',
       }
     ]
    };
  }

  setNewAppointment = (reservationObject) => {
    /*
    let newReservation = {
      date: dateFormat(new Date(2017, 12, 24, 10, 0)),
      doctor: 'JoUlU PuKkI',
      occupation: 'Ravintoneuvoja',
      bodyPart: 'torso',
      symptoms: 'obesity',
      text: 'Liika kinkkua, maha kasvanu oudosti : /',
      id: '4',
    }*/
    this.setState(prevState => ({ reservations: prevState.reservations.concat([reservationObject]) }));
    console.log(this.state.reservations);
  }

  cancelReservation = (reservation) => {
    this.setState(prevState => ({ reservations: prevState.reservations.filter(res => res.id !== reservation.id )}));
  }

  render() {
    const location = this.props.location.pathname;
    const contentClass = location === "/" ? "Content-main" : "Content";
    return (
      <div>
        <Navbar location={location} />
        <main className={contentClass}>
          <Switch>
            <Route exact path="/" render={()=>
              <MainView reservations={this.state.reservations}
                pastReservations={this.state.pastReservations}
                cancelReservation={this.cancelReservation}
              />
            }/>
            <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} />} />
            <Route path="/login" component={LoginView} />
            <Route path="/appointment/:id" render={(routeProps) => <ExpandedCardView appointment={this.state.reservations.find(res => res.id === routeProps.match.params.id)||this.state.pastReservations.find(res => res.id === routeProps.match.params.id)} cancelReservation={this.cancelReservation} /> }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
