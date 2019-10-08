import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import red from '@material-ui/core/colors/red';
import { makeStyles } from '@material-ui/core';

const showTTL = 3000;

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('768')]: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      left: 'auto',
      minWidth: '288px',
    },
  },
  message: { backgroundColor: '#4d4d4d' },
  error: { backgroundColor: red[800] },
}));

export default function Notification({ message, setMessage }) {
  const classes = useStyles();
  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setMessage({ error: false, msg: null });
  }

  return (
    <div id="#notificationSnackBar">
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={!!message.msg}
        autoHideDuration={showTTL}
        onClose={handleClose}
        ContentProps={{
          className: message.error ? classes.error : classes.message,
          'aria-describedby': 'message-id',
        }}
        message={
          <span id="message-id" style={{ color: '#ececec' }}>
            {message.msg}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
