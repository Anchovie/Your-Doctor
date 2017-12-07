import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import AvailableTimeCard from './Components/AvailableTimeCard';


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
                className="Date-field"
              />
            <Grid container spacing={24}>
              { this.props.availableTimes.map((appointment, i) =>
                <Grid key={i} item xs={12} lg={6}>
                  <AvailableTimeCard appointment={appointment} handleAppointmentClick={this.props.handleAppointmentClick}/>
                </Grid>
              )}
            </Grid>
        </div>
    )
  }
}

