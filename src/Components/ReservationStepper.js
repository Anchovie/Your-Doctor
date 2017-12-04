import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Grid from 'material-ui/Grid';


/* PARENTS (called from):
* ReservationView.js
*/

function ReservationStepper(props) {
  const steps = ['', '', '', '', ''];
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={8} lg={6}>
        <Stepper activeStep={props.currentStep} alternativeLabel className="New-reservation-stepper">
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
    </Grid>
  );
}

export default ReservationStepper;
