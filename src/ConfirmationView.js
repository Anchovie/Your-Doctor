import React from 'react';
import Button from 'material-ui/Button';
import Check from 'mui-icons/cmdi/check';

/* PARENTS (called from):
* ReservationView.js
*/

export default class ConfirmationView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div className="Confirmation-view-content">
            <p> This is confirmation view ! </p>
            <Button dense color="default" onClick={this.props.handleBackClick}>
            Cancel
            </Button>
            <Button raised dense color="primary" onClick={this.props.handleConfirmationDialogOpen}>
              Confirm
              <Check className="Check-icon"/>
            </Button>
            
        </div>
    )
  }
}
