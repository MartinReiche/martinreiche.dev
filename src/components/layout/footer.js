import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import Social from './social';

const useStyles = makeStyles(() => ({
  container: {
    height: 'calc(100vh - 100px)',
    backgroundColor: '#008090',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    fontWeight: 300,
    color: '#e3e3e3',
    padding: 10,
    fontSize: 20,
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
              Dr. Martin Reiche <br />
              Full Stack Web Entwickler <br />
              Wandererstraße 89c <br />
              90431 Nürnberg <br />
              martin@reiche.dev
            </div>
          ) : (
            <div>
              Martin Reiche, PhD <br />
              Full Stack Web Developer <br />
              Wandererstraße 89c <br />
              90431 Nuremberg, Germany <br />
              martin@reiche.dev
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
