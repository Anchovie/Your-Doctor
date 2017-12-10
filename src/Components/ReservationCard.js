import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import InfoBG from '../img/info2.png';
import { Link } from 'react-router-dom';
import CancelDialog from './CancelDialog';
import Clock from 'mui-icons/cmdi/clock';
import Calendar from 'mui-icons/cmdi/calendar';
import Hidden from 'material-ui/Hidden';

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
    if (this.props.appointment!=null){
      this.props.cancelReservation(this.props.appointment)
      this.setState({ cancelDialogOpen: false })
    } else {
      this.props.cancelReservation();
    }
  }
  //console.log("Reservation card props:");
  //console.log(this.props);

  render() {
    const { classes } = this.props;
    const isInfo = this.props.appointment==null?true:false;
    const bgImgStyle = isInfo?{
          backgroundImage: "url("+InfoBG+")",
          backgroundPosition: 'right-top',
          backgroundSize: 'auto 100%'
        }:{
          backgroundImage: "url("+this.props.appointment.img+")"
        };
    if (isInfo && this.props.canceled) {
      return (<div></div>);
    } else
    return (
      <Card raised={true} className={this.props.past?(classes.card+" past"):classes.card} style={bgImgStyle}>
      {isInfo==true ? (
        <div>
          <CardContent className="Reservation-card-content info">
            <Typography type="body1">
              {'Welcome to using Your Doctor!'}
            </Typography>
            <Typography type="title" component="h2">
              {'Making a new reservation:'}
            </Typography>
            <Typography type="subheading">
              {'Click the plus-icon in the upper right corner'}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing className="Reservation-card-actions">
              <Button onClick={this.handleCancelDialogOpen} dense color="primary">
                Remove tooltip
              </Button>
          </CardActions>
          <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
        </div>
      ) : (
        <div>
        <CardContent className="Reservation-card-content">
          <Typography type="body1">
            Video appointment
          </Typography>
          <Typography type="title" component="h2">
            {this.props.appointment.doctor}
          </Typography>
          <Typography type="subheading">
            {this.props.appointment.occupation}
          </Typography>
          {/* Desktop */}
          <Hidden smDown implementation="css">
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
          </Hidden>
          {/* Mobile */}
          <Hidden smUp>
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
          </Hidden>
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
        </div>
        )}
      </Card>
    );
  }
}

ReservationCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReservationCard);
