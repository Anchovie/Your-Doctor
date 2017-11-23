import React, { Component } from 'react';

export default class ReservationView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
    };
  }

  render() {
    return (
      <div className="Reservation-view-content">
        <p> This is a reservation view</p>
      </div>
    );
  }
}