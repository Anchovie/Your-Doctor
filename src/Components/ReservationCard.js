import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
//import CardBackground from '../img/corgi.png';
import { Link } from 'react-router-dom';
import CancelDialog from './CancelDialog';
import Clock from 'mui-icons/cmdi/clock';
import Calendar from 'mui-icons/cmdi/calendar';

/* PARENTS (called from):
* MainView.js
*
*
*/
const styles = theme => ({
  card: {

    overflow: 'auto',
    //backgroundImage: "url(" + this.props.appointment.img + ")",
    //backgroundImage: "url(" + CardBackground + ")",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'auto 55%'//'80px 80px'
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
    //console.log(this.props.appointment.img);
    //console.log(CardBackground);
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
    this.props.cancelReservation(this.props.appointment)
    this.setState({ cancelDialogOpen: false })
  }
  //console.log("Reservation card props:");
  //console.log(this.props);

  render() {
    const { classes } = this.props;
    const bgImgStyle = {backgroundImage: "url("+this.props.appointment.img+")"};
    return (
      <Card raised={true} className={this.props.past?(classes.card+" past"):classes.card} style={bgImgStyle}>
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
              <Calendar />
              <Typography type="headline">
                {this.props.appointment.date}
              </Typography>
            </div>
            <div className="Double-card-row">
              <Clock />
              <Typography type="headline">
                {this.props.appointment.time}
              </Typography>
            </div>
          </div>
          <Typography type="body1" style={{width: "60%", wordBreak: "normal"}}>
            Symptoms: {this.props.appointment.symptoms}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing className="Reservation-card-actions">
          {this.props.appointment.past === false &&
            <Button onClick={this.handleCancelDialogOpen} dense color="primary">
              Cancel
            </Button>
          }
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
