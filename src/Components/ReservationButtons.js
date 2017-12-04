import React from 'react';
import Button from 'material-ui/Button';
import ArrowRightIcon from 'mui-icons/cmdi/arrow-right';
import Check from 'mui-icons/cmdi/check';


/* PARENTS (called from):
* ReservationView.js
*/

function ReservationButtons(props) {
  return (
    <div>
    {(props.currentStep === 1 || props.currentStep === 2) &&
      <div className="Button-bar">
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
    {props.currentStep === 4 &&
      <div className="Button-bar">
        <div>
          <Button dense color="default" onClick={props.handleBackClick}>
          Cancel
          </Button>
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
