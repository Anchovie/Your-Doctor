import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


export default class LoginView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LoginView">
        <header className="App-header">
          <div className="App-title">Your Doctor</div>
        </header>
        <Link to='/'>
          <Button raised aria-label="Login">
            Login
          </Button>
        </Link>
      </div>
    );
  }
}
