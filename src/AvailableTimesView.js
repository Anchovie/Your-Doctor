import React from 'react';
import TextField from 'material-ui/TextField';


/* PARENTS (called from):
* ReservationView.js
*/

export default class AvailableTimesView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date : new Date()
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
                defaultValue="2018-01-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
        </div>
    )
  }
}
