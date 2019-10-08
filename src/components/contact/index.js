import React from 'react';
import ContactForm from './form';
import { makeStyles, Container } from '@material-ui/core';

const title = {
  de: 'Kontaktieren Sie mich!',
  en: 'Get in touch!',
};

const useStyles = makeStyles({
  container: {
    backgroundColor: '#008090',
  },
  wrapper: {
    backgroundColor: '#ececec',
  },
  center: {
    padding: '10px',
    margin: 'auto',
  },
  heading: {
    fontWeight: 200,
    color: '#4d4d4d',
  },
  form: {
    margin: '100px 0',
  },
});

export function Contact({ locale }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Container maxWidth="lg" className={classes.center}>
          <h1 className={classes.heading}>{title[locale]}</h1>
          <div className={classes.form}>
            <ContactForm locale={locale} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
