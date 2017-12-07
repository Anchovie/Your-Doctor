import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CardBackground from '../img/corgi.png';
import Clock from 'mui-icons/cmdi/clock';
import Calendar from 'mui-icons/cmdi/calendar';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';

/*
* AvailableTimesView.js
*/

const styles = theme => ({
  card: {
    overflow: 'auto',
    backgroundImage: "url(" + CardBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '80px 80px'
  },
});


class AvailableTimeCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card raised={true} className={this.props.past?(classes.card+" past"):classes.card}>
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
              <Typography type="headline">
                {this.props.appointment.date}
              </Typography>
            </div>
            <div className="Double-card-row">
              <Clock className="Card-icon"/>
              <Typography type="headline">
                {this.props.appointment.time}
              </Typography>
            </div>
          </div>
          <div className="Reservation-card-row">
            <div className="Double-card-row">
              <TagTextOutline className="Card-icon"/>
              <Typography type="body1">
                Price: {this.props.appointment.price}
              </Typography>
            </div>
            <div className="Double-card-row">
              <TimerSand className="Card-icon"/>
              <Typography type="body1">
                Duration: {this.props.appointment.duration}
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

AvailableTimeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailableTimeCard);
