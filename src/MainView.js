import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ResCard from './ReservationCard';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PlusIcon from 'mui-icons/cmdi/plus';
import { Link } from 'react-router-dom';


export default class MainView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainView">
        <Link to='/reservation'>
          <Button className="Add-button" fab color="primary" aria-label="Create new appointment">
            <PlusIcon />
          </Button>
        </Link>
        <div className="MainView-Content">
          <Typography>Upcoming</Typography>
          <Grid container spacing={24}>
            { this.props.reservations.map((appointment, i) =>
              <Grid key={i} item xs={12} lg={6}>
                <ResCard {...appointment} />
              </Grid>
            )}
          </Grid>
          <Typography>Past</Typography>
          <Grid container spacing={24}>
           { this.props.pastReservations.map((appointment, i) =>
              <Grid key={i} item xs={12} lg={6}>
                <ResCard {...appointment} />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    );
  }
}
