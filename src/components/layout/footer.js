import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Social from './social';

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100vh - 100px)',
    backgroundColor: '#ececec',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    fontWeight: 300,
    padding: 10,
    fontSize: 20,
    color: '#089',
    '@media all and (max-width: 512px)': {
      flexDirection: 'column',
    },
  },
  social: {
    '@media all and (max-width: 512px)': {
      marginTop: 100,
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

export function Footer({ locale }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.footer}>
        <div>
          {locale === 'de' ? (
            <div>
              Dr. Martin Reiche | martin@reiche.dev
            </div>
          ) : (
            <div>
              Martin Reiche, PhD | martin@reiche.dev
            </div>
          )}
        </div>
        <div className={classes.social}>
          <Social />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
