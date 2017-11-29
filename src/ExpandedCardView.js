import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CancelDialog from './CancelDialog';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';

/* PARENTS (called from):
* (ReservationCard.js)
* App.js
*
*/

export default class ExpandedCardView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
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

  render() {
    return (
      <div>
      <Link to='/'>
         <IconButton>
           <ArrowLeftIcon className="Arrow-left-icon"/>
         </IconButton>
       </Link>
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
          {this.props.appointment.date +'\n'+  this.props.appointment.doctor}
        </Typography>
        <Typography component="p">
          Symptoms: {this.props.appointment.symptoms}
        </Typography>
        <Typography component="p">
          Price: {this.props.appointment.price}
        </Typography>
        <Typography component="p">
          Duration: {this.props.appointment.duration}
        </Typography>
        <Button onClick={this.handleCancelDialogOpen} dense color="primary">
          Cancel
        </Button>
        <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
      </div>
    )
  }
}
