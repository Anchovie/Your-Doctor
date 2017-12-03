import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';


/* PARENTS (called from):
* ReservationView.js
*/

function ReservationStepper(props) {
  return (
    <Stepper activeStep={props.currentStep} alternativeLabel className="New-reservation-stepper">
      {props.steps.map(label => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}

export default ReservationStepper;
