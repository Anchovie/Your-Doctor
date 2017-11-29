import React from 'react';
import BodyView from './BodyView';
import SymptomsView from './SymptomsView';
import InformationView from './InformationView';
import AvailableTimesView from './AvailableTimesView';
import ConfirmationView from './ConfirmationView';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import CheckIcon from 'mui-icons/cmdi/check';
import SymptomIcon from './img/corgi.png';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import MobileStepper from 'material-ui/MobileStepper';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';
import ConfirmedDialog from './ConfirmedDialog';
import Button from 'material-ui/Button';

/* PARENTS (called from):
* App.js
*/

export default class ReservationView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      chosenBody: [-1],
      chosenSymptoms: [],
      confirmationDialogOpen: false
    };
  }

  getSteps = () => {
    return ['Select body part', 'Select symptoms', 'Extra information', 'Select appointment', 'Confirm appointment'];
  }

  getIcons = (gridType) => {
    switch(gridType){
      case 1:
      return [SymptomIcon, SymptomIcon, SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,];
      case 2:
      return [SymptomIcon, SymptomIcon, SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon];
      default:
        break;
    }
  }
  handleBodyClick = (i) => {
    console.log("Icon " + i + " pressed!");
    this.setState({chosenBody: [i]});
    console.log(this.state.chosenBody);
    this.handleNextClick();
    //this.state.chosen.push(i);
  }

  handleSymptomClick = (i) => {
    console.log("Icon " + i + " pressed!");
    if(this.state.chosenSymptoms.indexOf(i)===-1){
      this.setState((prevState) => ({chosenSymptoms: prevState.chosenSymptoms.concat([i])}));
    } else {
      let arr = this.state.chosenSymptoms;
      arr.splice(this.state.chosenSymptoms.indexOf(i), 1);
      this.setState((prevState) => ({chosenSymptoms: arr}));
    }
    console.log(this.state.chosenSymptoms);
  }

  handleBackClick = () => {
    if (this.state.currentStep > 0) {
      // Go back to previous step
      this.setState((prevState) => ({ currentStep: prevState.currentStep - 1}));
    }
  }

  handleNextClick = () => {
    if (this.state.currentStep < 4) {
      // Go to next step
      this.setState((prevState) => ({ currentStep: prevState.currentStep + 1}));
    } else { //Save reservation
      this.props.setNewAppointment({paa: "huu"});
      // This click listener need to be pulled up to the parent to get new reservation there
    }
  }

  handleConfirmationDialogOpen = () => {
    this.setState({ confirmationDialogOpen: true })
  }

  render() {
    const steps = this.getSteps();

    return (
      <div className="Reservation-view-content">
        <p> This is a reservation view</p>
        {this.state.currentStep === 0 && <BodyView chosen={this.state.chosenBody} getIcons={this.getIcons} handleIconClick={this.handleBodyClick} />}
        {this.state.currentStep === 1 && <SymptomsView chosen={this.state.chosenSymptoms} getIcons={this.getIcons} handleIconClick={this.handleSymptomClick} />}
        {this.state.currentStep === 2 && <InformationView />}
        {this.state.currentStep === 3 && <AvailableTimesView />}
        {this.state.currentStep === 4 && <ConfirmationView />}
        {/* Desktop */}
        <Hidden mdDown implementation="css">
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
          {this.state.currentStep < 4 ? (
            <IconButton onClick={this.handleNextClick}>
              <ArrowRightIcon className="Arrow-right-icon"/>
            </IconButton>
          ) : (
            <Button onClick={this.handleConfirmationDialogOpen} dense color="primary">
              Confirm
            </Button>
          )}
        </Hidden>
        {/* Mobile */}
        <Hidden mdUp>
          <MobileStepper
            type="dots"
            steps={5}
            position="static"
            activeStep={this.state.currentStep}
            backButton={
              <IconButton onClick={this.handleBackClick}>
                <ArrowLeftIcon className="Arrow-left-icon"/>
              </IconButton>
            }
            nextButton={
                this.state.currentStep < 4 ? (
                  <IconButton onClick={this.handleNextClick}>
                    <ArrowRightIcon className="Arrow-right-icon"/>
                  </IconButton>
                ) : (
                  <Button onClick={this.handleConfirmationDialogOpen} dense color="primary">
                    Confirm
                  </Button>
                )
            }
          />
        </Hidden>
        <ConfirmedDialog open={this.state.confirmationDialogOpen} />
      </div>
    );
  }
}
