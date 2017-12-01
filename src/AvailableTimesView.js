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

    var newDate = new Date();
    var day;
    var today;

    if(newDate.getDate() < 10) {
      day = "0" + newDate.getDate();
    } else {
      day = newDate.getDate()
    };

    today = newDate.getFullYear() + '-' + (newDate.getMonth() +1) + '-' + day;
    console.log(today);

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
              {/*TODO appointment list */}
        </div>
    )
  }
}
function newFunction() {
  {
  }
}

