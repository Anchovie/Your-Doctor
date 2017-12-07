import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import CancelDialog from './Components/CancelDialog';
import { Link } from 'react-router-dom';
import Calendar from 'mui-icons/cmdi/calendar';
import VideoImage from './img/videocall_placeholder.png';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Clock from 'mui-icons/cmdi/clock';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';
import MessageTextOutline from 'mui-icons/cmdi/message-text-outline';
import ClipboardText from 'mui-icons/cmdi/clipboard-text';
import Hidden from 'material-ui/Hidden';
import Delete from 'mui-icons/cmdi/delete';
import ChevronLeft from 'mui-icons/cmdi/chevron-left';



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
      <div className="ExpandedCard-container">
        {/* Desktop */}
        <Hidden mdDown implementation="css">
          <Grid container justify="center" className="New-reservation-grid">
            <Grid item md={8} sm={12} xs={12}>
              <Card className="Expanded-card Expanded-card-content" raised={true}>
                <div className="Scrolled-container-wrapper">
                  <CardContent className="Scrolled-container">
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
                      <div className="Double-card-row">
                      <Calendar className="Card-icon"/>
                      <Typography component="p">
                        {this.props.appointment.date }
                      </Typography>
                      </div>
                      <div className="Double-card-row">
                      <Clock className="Card-icon"/>
                      <Typography component="p">
                        {this.props.appointment.time }
                      </Typography>
                      </div>
                    </div>
                    <Grid container spacing={24}>
                      <Grid item xs={12} sm={10} md={8} lg={6}>
                        <img className="Video-Image" src={VideoImage} alt="" />
                      </Grid>
                    </Grid>
                    <div className="Card-row">
                      <div className="Double-card-row">
                        <TagTextOutline className="Card-icon"/>
                        <Typography component="p">
                          Price: {this.props.appointment.price}
                        </Typography>
                      </div>
                      <div className="Double-card-row">
                        <TimerSand className="Card-icon"/>
                        <Typography component="p">
                          Duration: {this.props.appointment.duration}
                        </Typography>
                      </div>
                    </div>
                    <div className="Card-row">
                      <div className="Double-card-row">
                      <ClipboardText className="Card-icon"/>
                      <Typography component="p">
                        Symptoms: {this.props.appointment.symptoms}
                      </Typography>
                      </div>
                    </div>
                    <div className="Card-row">
                    <div className="Double-card-row">
                      <MessageTextOutline className="Card-icon"/>
                      <Typography component="p">
                        Information: {this.props.appointment.extraInfo}
                      </Typography>
                    </div>
                    </div>
                  </CardContent>
                </div>
                  <div className="Button-bar">
                    <Link to='/'>
                      <Button dense className="Action-button">
                        <ChevronLeft className="Arrow-left-icon"/>
                        Back
                      </Button>
                    </Link>
                    {this.props.appointment.past === false &&
                      <Button onClick={this.handleCancelDialogOpen} dense className="Expand-cancel-button Action-button">
                        <Delete />
                        Delete
                      </Button>
                    }
                  </div>
                <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
              </Card>
            </Grid>
          </Grid>
        </Hidden>
        {/* Mobile */}
        <Hidden mdUp implementation="css">
          <div className="Expanded-card-content">
            <div className="Scrolled-container-wrapper">
              <div className="Scrolled-container">
                <Typography type="body1">
                  Video appointment
                </Typography>
                <Typography type="headline" component="h2">
                  {this.props.appointment.doctor}
                </Typography>
                <Typography type="body1">
                  {this.props.appointment.occupation}
                </Typography>
                <div className="Card-row-mobile">
                  <div className="Double-row-mobile">
                    <Calendar className="Card-icon"/>
                    <Typography component="p">
                      {this.props.appointment.date }
                    </Typography>
                  </div>
                  <div className="Double-row-mobile">
                    <Clock className="Card-icon"/>
                    <Typography component="p">
                      {this.props.appointment.time }
                    </Typography>
                  </div>
                </div>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={10} md={8} lg={6}>
                    <img className="Video-Image" src={VideoImage} alt="" />
                  </Grid>
                </Grid>
                <div className="Card-row-mobile">
                  <div className="Double-row-mobile">
                    <TagTextOutline className="Card-icon"/>
                    <Typography component="p">
                      Price: {this.props.appointment.price}
                    </Typography>
                  </div>
                  <div className="Double-row-mobile">
                    <TimerSand className="Card-icon"/>
                    <Typography component="p">
                      Duration: {this.props.appointment.duration}
                    </Typography>
                  </div>
                </div>
                  <div className="Card-row-mobile">
                    <div className="Double-row-mobile">
                      <ClipboardText className="Card-icon"/>
                      <Typography component="p">
                        Symptoms: {this.props.appointment.symptoms}
                      </Typography>
                    </div>
                  </div>
                <div className="Card-row-mobile">
                  <div className="Double-row-mobile">
                    <MessageTextOutline className="Card-icon"/>
                    <Typography component="p">
                      Information: {this.props.appointment.extraInfo}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="Button-bar">
                <Link to='/'>
                  <Button dense className="Action-button">
                    <ChevronLeft className="Arrow-left-icon"/>
                    Back
                  </Button>
                </Link>
                {this.props.appointment.past === false &&
                  <Button onClick={this.handleCancelDialogOpen} dense className="Expand-cancel-button Action-button">
                    <Delete />
                    Delete
                  </Button>
                }
              </div>
              <CancelDialog open={this.state.cancelDialogOpen} handleCancelling={this.handleCancelling} handleCancelRequestClose={this.handleCancelRequestClose} />
            </div>
          </div>
        </Hidden>

      </div>
    )
  }
}
