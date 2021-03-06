import React from 'react';
import Grid from 'material-ui/Grid';
import ResCard from './Components/ReservationCard';

/* PARENTS (called from):
* App.js
*/


export default class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      canceled: false
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  cancelInfo = () => {
    this.setState({canceled: true});
  }

  render() {
    return (
      <div className="MainView">
        <div className="MainView-Content">
          <h3 className="MainView-subheading">Your upcoming appointments</h3>
          <Grid container spacing={24}>
            { this.props.reservations.map((appointment, i) =>
              <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
                <ResCard appointment={appointment} cancelReservation={this.props.cancelReservation} />
              </Grid>
            )}
          { this.props.reservations.length <= 0 &&
            <Grid key={-1} item xs={12} sm={12} md={12} lg={12}>
              <ResCard appointment={null} canceled={this.state.canceled} cancelReservation={this.cancelInfo} />
            </Grid>
          }
          </Grid>
          <h3 className="MainView-subheading2">Your past appointments</h3>
          <Grid container spacing={24}>
           { this.props.pastReservations.map((appointment, i) =>
              <Grid key={i} item xs={12} sm={12} md={6} lg={4}>
                <ResCard appointment={appointment} past={true}/>
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}
