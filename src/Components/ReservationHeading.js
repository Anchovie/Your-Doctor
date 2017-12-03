import React from 'react';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Home from 'mui-icons/cmdi/home';

/* PARENTS (called from):
* ReservationView.js
*/

function ReservationHeading() {
  return (
    <div className="New-reservation-heading">
      <Link to='/'>
        <IconButton>
        <Home className="Home-icon"/>
        </IconButton>
      </Link>
      <Typography type="title">
        New appointment
      </Typography>
    </div>
  );
}

export default ReservationHeading;
