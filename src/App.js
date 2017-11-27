import React, { Component } from 'react';
import './App.css';
import Grid from 'material-ui/Grid';
import MainView from './MainView';
import ReservationView from './ReservationView';
import LoginView from './LoginView';
import ExpandedCardView from './ExpandedCardView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Grid container justify='center' alignItems='center'>
            <div className="content">
              <Switch>
                <Route exact path="/" component={MainView} />
                <Route path="/reservation" component={ReservationView} />
                <Route path="/login" component={LoginView} />
                <Route path="/appointment/:id" component={ExpandedCardView} />
              </Switch>
            </div>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
