import React from 'react';
import IconGrid from './IconGrid';

/* PARENTS (called from):
* ReservationView.js
*/

export default class AvailableTimesView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div className="AvailableTimes-view-content">
            <p> This is available times view ! </p>
        </div>
    )
  }
}
