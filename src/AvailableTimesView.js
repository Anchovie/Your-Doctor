import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';


/* PARENTS (called from):
* ReservationView.js
*/

export default class AvailableTimesView extends React.Component {

  constructor(props) {
    super(props);

    var newDate = new Date(),
     today = newDate.getFullYear() + '-' + (newDate.getMonth() +1) + '-' + newDate.getDate();

    this.state = {
      date: today
    };
  }

  render() {

    return (
        <div className="AvailableTimes-view-content">
            <p> This is available times view ! </p>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue={this.state.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              {/* This button will go when the appointment list is implemented. */}
              <Button raised color="primary" float="right" onClick={this.props.handleNextClick}>
                Next
                <ArrowRightIcon className="Arrow-right-icon"/>
              </Button>
              {/*TODO appointment list */}
        </div>
    )
  }
}
