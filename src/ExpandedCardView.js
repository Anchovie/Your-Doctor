import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CancelDialog from './Components/CancelDialog';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';
import Calendar from 'mui-icons/cmdi/calendar';
import VideoImage from './img/videocall_placeholder.png';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Clock from 'mui-icons/cmdi/clock';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';
import MessageTextOutline from 'mui-icons/cmdi/message-text-outline';
import ClipboardText from 'mui-icons/cmdi/clipboard-text';



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
      <Card className="ExpandedCard" raised={true}>
        <CardContent>
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
          <div className="Card-row">
            <Calendar />
            <Typography component="p">
              {this.props.appointment.date }
            </Typography>
          </div>
          <div className="Card-row">
          <Clock />
            <Typography component="p">
              {this.props.appointment.time }
            </Typography>
          </div>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={10} md={8} lg={6}>
              <img className="Video-Image" src={VideoImage} alt="" />
            </Grid>
          </Grid>
          <div className='Card-row'>
            <ClipboardText />
            <Typography component="p">
              Symptoms: {this.props.appointment.symptoms}
            </Typography>
          </div>
          <div className='Card-row'>
            <TagTextOutline />
            <Typography component="p">
              Price: {this.props.appointment.price}
            </Typography>
          </div>
          <div className="Card-row">
            <TimerSand />
            <Typography component="p">
              Duration: {this.props.appointment.duration}
            </Typography>
          </div>
          <div className="Card-row">
            <MessageTextOutline />
            <Typography component="p">
              Information: {this.props.appointment.extraInfo}
            </Typography>
          </div>
        </CardContent>
        {this.props.appointment.past === false &&
          <CardActions disableActionSpacing >
            <Button onClick={this.handleCancelDialogOpen} dense color="primary">
              Cancel
            </Button>
            <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
          </CardActions>
        }
      </Card>
    )
  }
}
