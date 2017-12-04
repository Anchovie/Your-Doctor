import React from 'react';
import Grid from 'material-ui/Grid';
import ResCard from './Components/ReservationCard';

/* PARENTS (called from):
* App.js
*/


export default class MainView extends React.Component {

  render() {
    return (
      <div className="MainView">
        <div className="MainView-Content">
          <h3 className="MainView-subheading">Your upcoming appointments</h3>
          <Grid container spacing={24}>
            { this.props.reservations.map((appointment, i) =>
              <Grid key={i} item xs={12} lg={6}>
                <ResCard appointment={appointment} cancelReservation={this.props.cancelReservation} />
              </Grid>
            )}
          </Grid>
          <h3 className="MainView-subheading2">Your recent appointments</h3>
          <Grid container spacing={24}>
           { this.props.pastReservations.map((appointment, i) =>
              <Grid key={i} item xs={12} lg={6}>
                <ResCard appointment={appointment} past={true}/>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}
