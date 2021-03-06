import React from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Components/Navbar';
import { Link, Switch, Route } from 'react-router-dom';
import ExpandedCardView from './ExpandedCardView';
import dateFormat from 'dateformat';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PlusIcon from 'mui-icons/cmdi/plus';
import sortBy from 'lodash/sortBy';

import BodyHead from './img/body_head2.png';
import BodyTorso from './img/body_torso.png';
import BodyBack from './img/body_back.png';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      reservations: [
        {
          date: dateFormat(new Date(2017, 12, 18), "mmm dd yyyy"),
          time: '12:30',
          doctor: 'Dr. Raymond Stantz',
          occupation: 'Chief Paediatrician',
          bodyPart: 'head',
          symptoms: 'nausea',
          extraInfo: 'I\'ve suffered from debilitating headache and nausea for two days now.',
          price: '80 €',
          duration: '45 min',
          id: '0',
          img: BodyHead,
          past: false,
       },
       {
         date: dateFormat(new Date(2018, 1, 4), "mmm dd yyyy"),
         time: '8:15',
         doctor: 'Dr. Egon Spengler',
         occupation: 'Doctor of Dental Surgery',
         bodyPart: 'head',
         symptoms: 'toothache',
         extraInfo: 'I chipped my tooth and can\'t eat anything.',
         price: '120 €',
         duration: '60 min',
         id: '1',
         img: BodyHead,
         past: false,
       }
     ],
     pastReservations: [
       {
         date: dateFormat(new Date(2017, 12, 2), "mmm dd yyyy"),
         time: '10:30',
         doctor: 'Dr. Peter Venkman',
         occupation: 'cardiologist',
         bodyPart: 'torso',
         symptoms: 'heart problems',
         extraInfo: 'My girlfriend left me and my heart aches like a mf.',
         price: '65 €',
         duration: '45 min',
         id: '2',
         img: BodyTorso,
         past: true,
       }
     ],
     availableReservations: [
      {
       date: dateFormat(new Date(), "mmm dd yyyy"),
       time: '09:00',
       doctor: 'Dr. Drake Ramoray',
       occupation: 'Neurosurgeon',
       price: '460 €',
       duration: '40 min',
       past: false,
      },
      {
        date: dateFormat(new Date(), "mmm dd yyyy"),
        time: '14:30',
        doctor: 'Dr. Toshiko Sato',
        occupation: 'Physiatrist',
        bodyPart: 'back',
        price: '150 €',
        duration: '20 min',
        past: false,
      },
      {
        date: dateFormat(new Date(), "mmm dd yyyy"),
        time: '18:20',
        doctor: 'Dr. River Song',
        occupation: 'Medical specialist',
        price: '160 €',
        duration: '80 min',
        past: false,
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
    reservationObject.past=false;
    const newReservations = this.state.reservations.concat([reservationObject]);
    this.setState({reservations: sortBy(newReservations, ['date', 'time'])});
    console.log(this.state.reservations);
  }

  cancelReservation = (reservation) => {
    this.setState(prevState => ({ reservations: prevState.reservations.filter(res => res.id !== reservation.id )}));
  }

  render() {
    const location = this.props.location.pathname;
    let contentClass = "Content";
    if (location === "/") {
      contentClass = "Content-main"
    } else if (location === "/login") {
      contentClass = "Content-login"
    }
    return (
      <div>
        {location !== "/login" &&
          <Navbar location={location} />
        }
        {location === "/" &&
          <Link to='/reservation'>
            <Button className="Add-button" fab color="accent" aria-label="Create new appointment">
              <PlusIcon />
            </Button>
          </Link>
        }
        <Grid container justify="center" className={contentClass}>
          <Grid item xs={12} className="Content-grid-item">
            <Switch>
              <Route exact path="/" render={()=>
                <MainView reservations={this.state.reservations}
                  pastReservations={this.state.pastReservations}
                  cancelReservation={this.cancelReservation}
                />
              }/>
              <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} availableReservations={this.state.availableReservations}/>} />
              <Route path="/login" component={LoginView} />
              <Route path="/appointment/:id" render={(routeProps) => <ExpandedCardView appointment={this.state.reservations.find(res => res.id === routeProps.match.params.id)||this.state.pastReservations.find(res => res.id === routeProps.match.params.id)} cancelReservation={this.cancelReservation} /> }/>
            </Switch>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
