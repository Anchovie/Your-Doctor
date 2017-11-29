import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

/* PARENTS (called from):
* App.js
*/

export default class LoginView extends React.Component {

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
