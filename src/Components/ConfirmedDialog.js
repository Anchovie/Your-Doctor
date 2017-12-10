import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import { Link } from 'react-router-dom';

/* PARENTS (called from):
* ReservationView.js
*/

function OpenConfirmedDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onRequestClose={props.handleCancelRequestClose}
      >
        <DialogTitle>{"Appointment succesfully booked!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your newly made appointment appears on your homepage.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/'>
            <Button color="primary">
              Okay
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withMobileDialog()(OpenConfirmedDialog);
