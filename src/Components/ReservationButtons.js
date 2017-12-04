import React from 'react';
import Button from 'material-ui/Button';
import Check from 'mui-icons/cmdi/check';
import { Link } from 'react-router-dom';
import ChevronLeft from 'mui-icons/cmdi/chevron-left';
import ChevronRight from 'mui-icons/cmdi/chevron-right';


/* PARENTS (called from):
* ReservationView.js
*/

function ReservationButtons(props) {
  return (
    <div>
      {props.currentStep === 0 &&
        <div className="Button-bar">
          <Link to='/'>
            <Button dense color="primary" onClick={props.handleBackClick} className="Action-button">
              <ChevronLeft />
              Cancel
            </Button>
          </Link>
        </div>
      }
      {(props.currentStep === 1 || props.currentStep === 2) &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick} className="Action-button">
            <ChevronLeft />
            Previous
          </Button>
          {props.isNextDisabled ? (
            <Button disabled raised color="primary" className="Action-button">
              Next
              <ChevronRight/>
            </Button>
          ) : (
            <Button className="PulseButton Action-button" raised color="primary" onClick={props.handleNextClick}>
              Next
              <ChevronRight className="Arrow-right-icon"/>
            </Button>
          )}
        </div>
      }
      {props.currentStep === 3 &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick} className="Action-button">
            <ChevronLeft />
            Previous
          </Button>
        </div>
      }
      {props.currentStep === 4 &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick} className="Action-button">
            <ChevronLeft />
            Previous
          </Button>
          <div className="RightSideButtons Action-button">
            <Link to='/'>
              <Button className="cancelButton" dense color="default" onClick={props.handleBackClick}>
              Cancel
              </Button>
            </Link>
            <Button raised dense color="primary" onClick={props.handleConfirmationDialogOpen}>
              Confirm
              <Check className="Check-icon"/>
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default ReservationButtons;
