import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CardBackground from '../img/corgi.png';
import { Link } from 'react-router-dom';
import CancelDialog from './CancelDialog';

/* PARENTS (called from):
* MainView.js
*
*
*/
const styles = theme => ({
  card: {
    overflow: 'auto',
    backgroundImage: "url(" + CardBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '80px 80px'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});


class ReservationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cancelDialogOpen: false
    };
  }

  handleCancelDialogOpen = () => {
    this.setState({ cancelDialogOpen: true })
  }

  handleCancelRequestClose = () => {
    this.setState({ cancelDialogOpen: false })
  }

  handleCancelling = () => {
    // console.log(this.props)
    this.props.cancelReservation(this.props.appointment)
    this.setState({ cancelDialogOpen: false })
  }
  //console.log("Reservation card props:");
  //console.log(this.props);

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
            Symptoms: {this.props.appointment.symptoms}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing className="Reservation-card-actions">
          <Button onClick={this.handleCancelDialogOpen} dense color="primary">
            Cancel
          </Button>
          <Link to={`/appointment/${this.props.appointment.id}`}>
            <Button dense color="primary">
              Open
            </Button>
          </Link>
        </CardActions>
        <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
      </Card>
    );
  }
}

ReservationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReservationCard);
