import React from 'react';
import Typography from 'material-ui/Typography';
import Clock from 'mui-icons/cmdi/clock';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';
import MessageTextOutline from 'mui-icons/cmdi/message-text-outline';
import ClipboardText from 'mui-icons/cmdi/clipboard-text';
import Calendar from 'mui-icons/cmdi/calendar';
import Grid from 'material-ui/Grid';

/* PARENTS (called from):
* ReservationView.js
*/

export default function ConfirmationView(props) {
  console.log("props", props)
  return (
    <div className="Confirmation-view-content">
      <p className="Instruction-text">You are about to reserve the following appointment:</p>
      <br/>
      <Typography type="body1">
        Video appointment
      </Typography>
      <Typography type="headline" component="h2">
        {props.chosenAppointment.doctor}
      </Typography>
      <Typography type="body1">
        {props.chosenAppointment.occupation}
      </Typography>
      <Grid container className="Confirmation-view-grid" >
        <Grid item md={3} sm={6} xs={6}>
          <div className="Card-row-confirmation">
            <Calendar className="Card-icon"/>
            <Typography component="p">
              {props.chosenAppointment.date }
            </Typography>
          </div>
          <div className="Card-row-confirmation">
            <TagTextOutline className="Card-icon"/>
            <Typography component="p">
              Price: {props.chosenAppointment.price}
            </Typography>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={6}>
          <div className="Card-row-confirmation">
            <Clock className="Card-icon"/>
            <Typography component="p">
              {props.chosenAppointment.time }
            </Typography>
          </div>
          <div className="Card-row-confirmation">
            <TimerSand className="Card-icon"/>
            <Typography component="p">
              Duration: {props.chosenAppointment.duration}
            </Typography>
          </div>
        </Grid>
      </Grid>
        <div className="Card-row-confirmation">
          <div className="Double-card-row">
            <ClipboardText className="Card-icon"/>
            <Typography component="p">
              Symptoms: {props.symptoms}
            </Typography>
          </div>
        </div>
        <div className="Card-row-confirmation">
          <div className="Double-card-row">
            <MessageTextOutline className="Card-icon"/>
            <Typography component="p">
              Information: {props.extraInfo}
            </Typography>
          </div>
        </div>
    </div>
  )
}
