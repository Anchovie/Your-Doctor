import React from 'react';
import Button from 'material-ui/Button';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import Check from 'mui-icons/cmdi/check';
import { Link } from 'react-router-dom';


/* PARENTS (called from):
* ReservationView.js
*/

function ReservationButtons(props) {
  return (
    <div>
      {(props.currentStep === 1 || props.currentStep === 2) &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick}>
            Previous
          </Button>
          {props.isNextDisabled ? (
            <Button disabled raised color="primary">
              Next
              <ArrowRightIcon/>
            </Button>
          ) : (
            <Button className="PulseButton" raised color="primary" onClick={props.handleNextClick}>
              Next
              <ArrowRightIcon className="Arrow-right-icon"/>
            </Button>
          )}
        </div>
      }
      {props.currentStep === 3 &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick}>
            Previous
          </Button>
        </div>
      }
      {props.currentStep === 4 &&
        <div className="Button-bar">
          <Button dense color="primary" onClick={props.handleBackClick}>
            Previous
          </Button>
          <div className="RightSideButtons">
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
