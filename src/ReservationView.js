import React, { Component } from 'react';
import IconGrid from './IconGrid';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import CheckIcon from 'mui-icons/cmdi/check';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import MobileStepper from 'material-ui/MobileStepper';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

export default class ReservationView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
    };
  }

  getSteps = () => {
    return ['Select body part', 'Select symptoms', 'Select appointment', 'Confirm appointment'];
  }

  handleBackClick = () => {
    if (this.state.currentStep > 0) {
      // Go back to previous step
      this.setState((prevState) => ({ currentStep: prevState.currentStep - 1}));
    }
  }

  handleNextClick = () => {
    if (this.state.currentStep < 3) {
      // Go to next step
      this.setState((prevState) => ({ currentStep: prevState.currentStep + 1}));
    } else { //Save reservation
      // This click listener need to be pulled up to the parent to get new reservation there
    }
  }

  render() {
    const steps = this.getSteps();

    return (
      <div className="Reservation-view-content">
        <p> This is a reservation view</p>
        <IconGrid />
        {/* Desktop */}
        <MediaQuery query="(min-device-width: 1224px)">
          <Link to='/'>
            <IconButton>
              <ArrowLeftIcon className="Arrow-left-icon"/>
            </IconButton>
          </Link>
          <Stepper activeStep={this.state.currentStep} alternativeLabel>
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <IconButton onClick={this.handleBackClick}>
            <ArrowLeftIcon className="Arrow-left-icon"/>
          </IconButton>
          {this.state.currentStep < 3 ? (
            <IconButton onClick={this.handleNextClick}>
              <ArrowRightIcon className="Arrow-right-icon"/>
            </IconButton>
          ) : (
            <IconButton onClick={this.handleNextClick}>
              <CheckIcon className="Check-icon"/>
            </IconButton>
          )}
        </MediaQuery>
        {/* Mobile */}
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileStepper
            type="dots"
            steps={4}
            position="static"
            activeStep={this.state.currentStep}
            backButton={
              <IconButton onClick={this.handleBackClick}>
                <ArrowLeftIcon className="Arrow-left-icon"/>
              </IconButton>
            }
            nextButton={
                this.state.currentStep < 3 ? (
                  <IconButton onClick={this.handleNextClick}>
                    <ArrowRightIcon className="Arrow-right-icon"/>
                  </IconButton>
                ) : (
                  <IconButton onClick={this.handleNextClick}>
                    <CheckIcon className="Check-icon"/>
                  </IconButton>
                )
            }
          />
        </MediaQuery>
      </div>
    );
  }
}
