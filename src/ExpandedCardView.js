import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CancelDialog from './CancelDialog';

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
      <Card raised={true}>
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
        </CardContent>
        <CardActions disableActionSpacing>
          <Button onClick={this.handleCancelDialogOpen} dense color="primary">
            Cancel
          </Button>
          <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
        </CardActions>
      </Card>
    )
  }
}
