import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


export default class LoginView extends Component {

  render() {
    return (
      <div className="LoginView">
        <Link to='/'>
          <Button raised aria-label="Login">
            Login
          </Button>
        </Link>
      </div>
    );
  }
}
