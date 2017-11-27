import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import ResCard from './ReservationCard';
import Button from 'material-ui/Button';
import PlusIcon from 'mui-icons/cmdi/plus';
import { Link } from 'react-router-dom';


export default class MainView extends Component {

  render() {
    console.log(this.props.appointments);
    return (
      <div className="MainView">
        <Link to='/reservation'>
          <Button className="Add-button" fab color="primary" aria-label="Create new appointment">
            <PlusIcon />
          </Button>
        </Link>
        <div className="MainView-Content">
          <Grid container spacing={24}>
            {/* This will be the actual implementation when we have real data*/}
            {/* { this.props.appointments.map((appointment, i) =>
              <Grid key=i item xs={12} lg={6}>
                <ResCard {...appointment} />
              </Grid>
            )} */}
            <Grid item xs={12} md={6}>
              <ResCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <ResCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <ResCard />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
