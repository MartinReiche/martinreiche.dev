import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spinner: {
    minHeight: 376,
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <CircularProgress style={{ color: '#008090' }} size={100} />
    </div>
  );
}
