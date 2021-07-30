import React from 'react';
import {Button} from "@material-ui/core/";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogTemplate(props) {
    const {openState, open, close, dialogView} = props;
  return (
    <div>
      <Dialog
        open={openState}
        TransitionComponent={Transition}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
      >
          {dialogView}
      </Dialog>
    </div>
  );
}

export default DialogTemplate;