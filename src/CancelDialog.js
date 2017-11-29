import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';


function OpenCancelDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onRequestClose={props.handleCancelRequestClose}
      >
        <DialogTitle>{"Cancel this appointment?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are about to cancel this appointment:'(
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCancelling} color="primary">
            Yes, Cancel it
          </Button>
          <Button onClick={props.handleCancelRequestClose} color="primary" autoFocus>
            No, keep it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withMobileDialog()(OpenCancelDialog);