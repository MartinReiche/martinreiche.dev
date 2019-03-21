import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import red from '@material-ui/core/colors/red';

import { getState, clearAllMessages } from '../../state';

const showTTL = 3000;

const styles = theme => ({
  root: {
    [theme.breakpoints.up('768')]: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      left: 'auto',
      minWidth: '288px'
    }
  },
  message: { backgroundColor: '#4d4d4d' },
  error: { backgroundColor: red[800] }
});

function NotificationSnackBar(props) {
  const [error, setError] = useState(false);
  const [{ messages }, dispatch] = getState();

  useEffect(() => {
    setError(messages.error ? true : false);
  });

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearAllMessages());
  }

  const { classes } = props;
  const messageText = error ? messages.error : messages.message;
  return (
    <div id="#notificationSnackBar">
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={!!messages.message || !!messages.error}
        autoHideDuration={showTTL}
        onClose={handleClose}
        ContentProps={{
          className: error ? classes.error : classes.message,
          'aria-describedby': 'message-id'
        }}
        message={
          <span id="message-id" style={{ color: '#ececec' }}>
            {messageText}
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
          </IconButton>
        ]}
      />
    </div>
  );
}

NotificationSnackBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export const Notification = withStyles(styles)(NotificationSnackBar);
export default Notification;
