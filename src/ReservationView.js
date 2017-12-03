import React from 'react';
import BodyView from './BodyView';
import SymptomsView from './SymptomsView';
import InformationView from './InformationView';
import AvailableTimesView from './AvailableTimesView';
import ConfirmationView from './ConfirmationView';
import IconButton from 'material-ui/IconButton';
import dateFormat from 'dateformat';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Hidden from 'material-ui/Hidden';
import { Link } from 'react-router-dom';
import ConfirmedDialog from './Components/ConfirmedDialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Check from 'mui-icons/cmdi/check';

import ArrowLeftIcon from 'mui-icons/cmdi/arrow-left';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import Home from 'mui-icons/cmdi/home';
//import CheckIcon from 'mui-icons/cmdi/check';
import SymptomIcon from './img/corgi.png';
import BodyHeadIcon from './img/body_head.png';
import BodyTorsoIcon from './img/body_torso.png';
import BodyStomachIcon from './img/body_stomach.png';
import BodyBackIcon from './img/body_back.png';
import BodyHandIcon from './img/body_hand.png';
import BodyFootIcon from './img/body_foot.png';
import BodyBodyIcon from './img/body_body.png';
import BodyIntimateIcon from './img/body_intimate.png';
import BodyMedicineIcon from './img/body_medicine.png';
import SymptomWoundIcon from './img/symptom_cut.png';
//import SymptomWound2Icon from './img/symptom_wound.png';
import SymptomOtherIcon from './img/symptom_other.png';
import SymptomHeadIcon from './img/symptom_head2.png';
import SymptomEyeIcon from './img/symptom_eye.png';
import SymptomEarIcon from './img/symptom_ear.png';
import SymptomNoseIcon from './img/symptom_nose.png';
import SymptomOralIcon from './img/symptom_mouth.png';
import SymptomToothAcheIcon from './img/symptom_tooth_broken.png';
import SymptomToothIcon from './img/symptom_tooth.png';
import SymptomMentalIcon from './img/symptom_head.png';
import SymptomBosomIcon from './img/symptom_bosom.png';
import SymptomHeartIcon from './img/symptom_heart.png';
import SymptomLungIcon from './img/symptom_lungs.png';
import SymptomThroatIcon from './img/symptom_throat.png';
import SymptomButtIcon from './img/symptom_butt.png';
import SymptomBowelIcon from './img/symptom_bowels.png';
import SymptomStomachIcon from './img/symptom_stomach.png';
import SymptomBoneIcon from './img/symptom_bone.png';
import SymptomSpineIcon from './img/symptom_spine.png';
import SymptomKidneyIcon from './img/symptom_kidney.png';
import SymptomUterusIcon from './img/symptom_uterus.png';
import SymptomHipsIcon from './img/symptom_hips.png';
import SymptomPissIcon from './img/symptom_piss.png';
import SymptomSexIcon from './img/symptom_sex.png';
import SymptomFetusIcon from './img/body_fetus.png';
import SymptomMedicineIcon from './img/body_medicine2.png';
import SymptomTestIcon from './img/symptom_testtube.png';
import SymptomXrayIcon from './img/symptom_xray.png';
import SymptomSyringeIcon from './img/symptom_syringe.png';

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
      chosenAppointment: [-1],
      confirmationDialogOpen: false,
      duration: "",
      extraInfo: "",
      isNextDisabled: true,
    };
  }

  getSteps = () => {
    return ['Select body part', 'Select symptoms', 'Extra information', 'Select appointment', 'Confirm appointment'];
  }

  getMobileSteps = () => {
    return ['', '', '', '', ''];
  }

  iToBody =(i) =>{
    const bodyParts = ['Head', 'Torso', 'Stomach', 'Back', 'Hand', 'Foot', 'Body', 'Intimate', 'Medicine'];
    return bodyParts[i];
  }

  iToSymptom =(bodyPart, iArr)=>{
    let symptomString = "";
    let symptoms = [];
    switch(bodyPart){
      case 0: //HEAD
        symptoms = ['Headache', 'Eye problems','Ear problems', 'Nose problems','Oral problems', 'Toothache', 'Dental examination', 'Mental problems', 'Wound', 'Other'];
        break;
      case 1: // TORSO
        symptoms = ['Chest pain', 'Heart problems', 'Trouble breathing', 'Respiratory problems', 'Heartburn', 'Wound', 'Other'];
        break;
      case 2: // STOMACH
        symptoms = ['Stomach pain', 'Diarrhea', 'Digestive issues', 'Nutritional problems', 'Wound', 'Other'];
        break;
      case 3: // BACK
        symptoms = ['Back pain', 'Spinal problems', 'Kidney problems', 'Posture problems', 'Wound', 'Other'];
        break;
      case 4: // HAND
      case 5: //LEG
        symptoms = ['Pain', 'Broken bone', 'Burn', 'Wound', 'Other'];
        break;
      case 6: //BODY
        symptoms = ['Overall pain', 'Broken bones', 'Eczema/Rash', 'Wound', 'Other'];
        break;
      case 7: //INTIMATE
        symptoms = ['Genital pain', 'Urinary problems', 'STD', 'Menstruation problems', 'Pregnancy', 'Wound', 'Other'];
        break;
      case 8: //MEDICINE
        symptoms = ['Prescriptions', 'Medicine inquiries', 'Laboratory tests', 'X-ray', 'Vaccination', 'Other'];
        break;
      default:
        symptoms = ['corgi', 'corgi','corgi', 'corgi','corgi', 'corgi','corgi', 'corgi', 'corgi','corgi', 'corgi', 'corgi'];
        break;
    }
    for (let i in iArr){
      symptomString+=symptoms[i]+", ";
    }
    return symptomString;
  }

  getIcons = (gridType) => {
    switch(gridType){
      case -1: //BODY
        return [BodyHeadIcon, BodyTorsoIcon, BodyStomachIcon,
          BodyBackIcon, BodyHandIcon, BodyFootIcon,
          BodyBodyIcon, BodyIntimateIcon, BodyMedicineIcon];
      case 0: //HEAD
        return [SymptomHeadIcon, SymptomEyeIcon, SymptomEarIcon,
          SymptomNoseIcon,SymptomOralIcon,SymptomToothAcheIcon,
          SymptomToothIcon,SymptomMentalIcon,SymptomWoundIcon,
          SymptomOtherIcon];
      case 1: //TORSO
        return [SymptomBosomIcon, SymptomHeartIcon, SymptomThroatIcon,
          SymptomLungIcon,SymptomIcon/*heartburn*/,SymptomWoundIcon,
          SymptomOtherIcon];
      case 2: //STOMACH
        return [SymptomStomachIcon, SymptomButtIcon, SymptomBowelIcon,
          SymptomIcon/*Nutritional*/,SymptomWoundIcon,SymptomOtherIcon];
      case 3: //BACK
        return [SymptomIcon/*backpain*/, SymptomSpineIcon, SymptomKidneyIcon,
          SymptomIcon/*posture*/, SymptomWoundIcon,SymptomOtherIcon];
      case 4: //HAND
      case 5: //FOOT
        return [SymptomIcon/*pain*/, SymptomBoneIcon, SymptomIcon/*burn*/,
          SymptomWoundIcon,SymptomOtherIcon];
      case 6: //BODY
        return [SymptomIcon/*pain*/, SymptomBoneIcon, SymptomIcon/*rash*/,
          SymptomWoundIcon,SymptomOtherIcon];
      case 7: //INTIMATE
        return [SymptomHipsIcon, SymptomPissIcon, SymptomSexIcon,
          SymptomUterusIcon, SymptomFetusIcon,
          SymptomWoundIcon,SymptomOtherIcon];
      case 8: //MEDICINE
        return [BodyMedicineIcon, SymptomMedicineIcon, SymptomTestIcon,
          SymptomXrayIcon, SymptomSyringeIcon, SymptomOtherIcon];
      default:
      return [SymptomIcon, SymptomIcon, SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon,
        SymptomIcon,SymptomIcon,SymptomIcon];

    }
  }
  handleBodyClick = (i) => {
    console.log("Icon " + i + " pressed!");
    this.setState({chosenBody: [i]});
    console.log(this.state.chosenBody);
    // Go to next step from body click
    if (this.state.currentStep < 4) {
      this.setState((prevState) => ({ currentStep: prevState.currentStep + 1}))
    }
    //this.state.chosen.push(i);
  }

  handleSymptomClick = (i) => {
    console.log("Icon " + i + " pressed!");
    // If symptom already in chosen symptoms, deselect it
    const index = this.state.chosenSymptoms.indexOf(i);
    if (index > -1) {
      this.setState(prevState => ({ chosenSymptoms: prevState.chosenSymptoms.filter(symptom => symptom !== i )}), () => {
        if (this.state.chosenSymptoms.length === 0) {
          this.setState({isNextDisabled: true});
        }
        console.log(this.state.chosenSymptoms);
      });
    } else {
      this.setState((prevState) => ({chosenSymptoms: prevState.chosenSymptoms.concat([i])}), () => {
        console.log(this.state.chosenSymptoms);
      });
    }
    if (this.state.isNextDisabled === true) {
      this.setState({isNextDisabled: false});
    }
  }

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
      isNextDisabled: false,
    });
  }

  handleAppointmentClick = (i) => {
    console.log("Appointment " + i + " pressed!");
    this.setState({chosenAppointment: [i]});
    console.log(this.state.chosenAppointment);
    // Go to next step from body click
    if (this.state.currentStep < 4) {
      this.setState((prevState) => ({ currentStep: prevState.currentStep + 1}))
    }
    //this.state.chosen.push(i);
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
    }
    // TODO: should be disabled in the last step also before some appointment has been chosen
    if (this.state.currentStep < 2) {
      this.setState({isNextDisabled: true});
    } else {
      this.setState({isNextDisabled: false});
    }
  }
  handleConfirmationDialogOpen = () => {
    this.setState({ confirmationDialogOpen: true })
    this.createNewReservation();
  }

  createNewReservation = () => {
    const newReservation = {
      date: dateFormat(new Date(2017, 12, 24, 10, 0)),
      doctor: 'JoUlU PuKkI',
      occupation: 'Ravintoneuvoja',
      price: '999,99 €',
      bodyPart: this.iToBody(this.state.chosenBody),
      symptoms: this.iToSymptom(this.state.chosenBody[0], this.state.chosenSymptoms),
      duration: this.state.duration,
      extraInfo: this.state.extraInfo,
      id: String(Date.now()),
    }
    this.props.setNewAppointment(newReservation);
  }

  render() {
    const steps = this.getSteps();
    const mobileSteps = this.getMobileSteps();
    return (
      <Grid container justify="center" className="New-reservation-grid">
        <Grid item md={8} sm={12} xs={12}>
          <Card className="New-reservation-card">
            <div className="Scrolled-container-wrapper">
            <CardContent>
              <div className="New-reservation-heading">
                <Link to='/'>
                  <IconButton>
                    <Home className="Home-icon"/>
                  </IconButton>
                </Link>
                <Typography type="title">
                  New appointment
                </Typography>
              </div>
              {/* Desktop */}
              <Hidden mdDown implementation="css">
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
              </Hidden>
              <Hidden mdUp>
                <Stepper activeStep={this.state.currentStep} alternativeLabel>
                  {mobileSteps.map(label => {
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
              </Hidden>
              {this.state.currentStep === 0 &&
              <BodyView
                chosen={this.state.chosenBody}
                getIcons={this.getIcons}
                handleIconClick={this.handleBodyClick} />}
              {this.state.currentStep === 1 &&
              <SymptomsView
                chosen={this.state.chosenSymptoms}
                chosenBody={this.state.chosenBody}
                getIcons={this.getIcons}
                handleIconClick={this.handleSymptomClick}
                handleNextClick={this.handleNextClick}
              />}
              {this.state.currentStep === 2 &&
              <InformationView
                handleTextChange={this.handleTextChange}
                handleNextClick={this.handleNextClick}
              />}
              {this.state.currentStep === 3 &&
              <AvailableTimesView
                chosen={this.state.chosenAppointment}
                availableTimes={this.props.availableReservations}
                handleAppointmentClick={this.handleAppointmentClick}
                handleNextClick={this.handleNextClick}/>}
              {this.state.currentStep === 4 &&
              <ConfirmationView
                handleConfirmationDialogOpen={this.handleConfirmationDialogOpen}
                handleBackClick={this.handleBackClick}
              />}
              <ConfirmedDialog open={this.state.confirmationDialogOpen} />
            </CardContent>
            </div>
            <div className="Button-bar">
              {(this.state.currentStep === 1 || this.state.currentStep === 2) &&
              (this.state.isNextDisabled ? (
                <Button disabled raised color="primary">
                  Next
                  <ArrowRightIcon/>
                </Button>
              ) : (
                <Button className="PulseButton" raised color="primary" onClick={this.handleNextClick}>
                Next
                <ArrowRightIcon className="Arrow-right-icon"/>
              </Button>
              ))}
              {this.state.currentStep === 4 &&
                <div>
                  <Button dense color="default" onClick={this.props.handleBackClick}>
                  Cancel
                  </Button>
                  <Button raised dense color="primary" onClick={this.handleConfirmationDialogOpen}>
                    Confirm
                    <Check className="Check-icon"/>
                  </Button>
                </div>
              }
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
