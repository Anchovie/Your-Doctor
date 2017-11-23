import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';

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
        <IconButton onClick={this.props.handleBackClick}>
          <ArrowLeftIcon className="Arrow-left-icon"/>
        </IconButton>
      </div>
    );
  }
}