import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import CheckIcon from 'mui-icons/cmdi/check';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import MobileStepper from 'material-ui/MobileStepper';
import MediaQuery from 'react-responsive';

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
    // If this is the first step, go back to menu
    if (this.state.currentStep === 0) {
      this.props.handleBackMenuClick();
    } else {
      // Otherwise go back to previous step
      this.setState((prevState) => ({ currentStep: prevState.currentStep - 1}));
    }
  }

  handleNextClick = () => {
    // If this is the last step, go back to menu
    if (this.state.currentStep === 3) {
      this.props.handleBackMenuClick();
    } else {
      // Otherwise go to next step
      this.setState((prevState) => ({ currentStep: prevState.currentStep + 1}));
    }
  }

  render() {
    const steps = this.getSteps();

    return (
      <div className="Reservation-view-content">
        <p> This is a reservation view</p>
        {/* Desktop */}
        <MediaQuery query="(min-device-width: 1224px)">
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