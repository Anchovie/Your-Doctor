import React from 'react';
import Typography from 'material-ui/Typography';

/* PARENTS (called from):
* ReservationView.js
*/

function ReservationHeading() {
  return (
    <div className="New-reservation-heading">
      <Typography type="title">
        New appointment
      </Typography>
    </div>
  );
}

export default ReservationHeading;
