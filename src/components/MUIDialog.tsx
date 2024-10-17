import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

export const MUIDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button onClick={handleClick}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={()=>setOpen(false)}
      >
        <DialogTitle aria-label="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit after submitting!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={()=>setOpen(false)} autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
