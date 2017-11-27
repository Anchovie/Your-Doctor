import React, { Component } from 'react';
import './App.css';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
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
                <Route exact path="/" render={() => <MainView appointments={this.state.appointments}/>} />
                <Route path="/reservation" render={() => <ReservationView setNewAppointment={this.setNewAppointment} />} />
                <Route path="/login" component={LoginView} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
