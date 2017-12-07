import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CardBackground from '../img/corgi.png';

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
          <Typography type="headline" component="h2">
            {this.props.appointment.doctor}
          </Typography>
          <Typography type="body1">
            {this.props.appointment.occupation}
          </Typography>
          <Typography component="p">
            {this.props.appointment.date}
          </Typography>
          <Typography component="p">
            {this.props.appointment.duration}
          </Typography>
          <Typography component="p">
            {this.props.appointment.price}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
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
