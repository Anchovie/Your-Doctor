import React from 'react';
import Typography from 'material-ui/Typography';
import Clock from 'mui-icons/cmdi/clock';
import TagTextOutline from 'mui-icons/cmdi/tag-text-outline';
import TimerSand from 'mui-icons/cmdi/timer-sand';
import MessageTextOutline from 'mui-icons/cmdi/message-text-outline';
import ClipboardText from 'mui-icons/cmdi/clipboard-text';
import Calendar from 'mui-icons/cmdi/calendar';

/* PARENTS (called from):
* ReservationView.js
*/

export default function ConfirmationView(props) {
  console.log("props", props)
  return (
    <div className="Confirmation-view-content">
      <Typography>
        You are about to reserve the following appointment:
      </Typography>
      <Typography type="body1">
        Video appointment
      </Typography>
      <Typography type="headline" component="h2">
        {props.chosenAppointment.doctor}
      </Typography>
      <Typography type="body1">
        {props.chosenAppointment.occupation}
      </Typography>
      <div className="Card-row">
        <div className="Double-card-row">
          <Calendar className="Card-icon"/>
          <Typography component="p">
            {props.chosenAppointment.date }
          </Typography>
        </div>
        <div className="Double-card-row">
          <Clock className="Card-icon"/>
          <Typography component="p">
            {props.chosenAppointment.time }
          </Typography>
        </div>
      </div>
      <div className="Card-row">
        <div className="Double-card-row">
          <ClipboardText className="Card-icon"/>
          <Typography component="p">
            Symptoms: {props.chosenAppointment.symptoms}
          </Typography>
        </div>
      </div>
      <div className="Card-row">
        <div className="Double-card-row">
          <TagTextOutline className="Card-icon"/>
          <Typography component="p">
            Price: {props.chosenAppointment.price}
          </Typography>
        </div>
        <div className="Double-card-row">
          <TimerSand className="Card-icon"/>
          <Typography component="p">
            Duration: {props.chosenAppointment.duration}
          </Typography>
        </div>
      </div>
      <div className="Card-row">
        <div className="Double-card-row">
          <MessageTextOutline className="Card-icon"/>
          <Typography component="p">
            Information: {props.chosenAppointment.extraInfo}
          </Typography>
        </div>
      </div>
    </div>
  )
}
