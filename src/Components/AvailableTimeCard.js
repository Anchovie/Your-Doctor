import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Clock from 'mui-icons/cmdi/clock';
import Calendar from 'mui-icons/cmdi/calendar';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';

/*
* AvailableTimesView.js
*/

class AvailableTimeCard extends React.Component {
  render() {
    return (
      <Card raised={true}>
        <CardContent>
          <Typography type="body1">
            Video appointment
          </Typography>
          <Typography type="title" component="h2">
            {this.props.appointment.doctor}
          </Typography>
          <Typography type="subheading">
            {this.props.appointment.occupation}
          </Typography>
          <div className="Reservation-card-row">
            <div className="Double-card-row">
              <Calendar className="Card-icon"/>
              <Typography type="body1">
                {this.props.appointment.date}
              </Typography>
            </div>
            <div className="Double-card-row">
              <Clock className="Card-icon"/>
              <Typography type="body1">
                {this.props.appointment.time}
              </Typography>
            </div>
          </div>
          <div className="Reservation-card-row">
            <div className="Double-card-row">
              <TagTextOutline className="Card-icon"/>
              <Typography type="body1">
                {this.props.appointment.price}
              </Typography>
            </div>
            <div className="Double-card-row">
              <TimerSand className="Card-icon"/>
              <Typography type="body1">
                {this.props.appointment.duration}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions disableActionSpacing className="Reservation-card-actions">
          <Button onClick={()=>this.props.handleAppointmentClick(this.props.appointment)} dense color="primary">
            Choose me
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default AvailableTimeCard;
