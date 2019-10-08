import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

import Loading from './loading';
import { Form } from '../../forms';
import { initFirebase } from '../../utils';
import Notification from './notification';

const messages = {
  success: {
    de: 'Vielen Dank für Ihre Kontaktanfrage.',
    en: 'Thank you very muich for your request.',
  },
  error: {
    de: 'Es ist ein fehler aufgetreten.',
    en: 'An Error has occurred.',
  },
};

const labels = {
  name: { de: 'Name *', en: 'Name *' },
  email: { de: 'Email *', en: 'Email *' },
  body: { de: 'Kommentar *', en: 'Comment *' },
  send: { de: 'Senden', en: 'Send' },
};
const errors = {
  missing: { de: 'ist erforderlich', en: 'is required' },
};

const useStyles = makeStyles({
  sidebyside: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'space-between',
    '@media all and (max-width: 500px)': {
      flexDirection: 'column',
    },
  },
  field: {
    flex: '1 1 auto',
  },
  actions: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
  },
  button: {
    padding: '0 20px',
  },
  left: {
    paddingRight: 10,
    '@media all and (max-width: 500px)': {
      padding: 0,
    },
  },
});

export function ContactForm({ locale }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: null });

  async function onSubmit(form) {
    const firebase = initFirebase();
    const db = firebase.firestore();

    const request = {
      name: form.name.value || 'unknown',
      email: form.email.value || 'unknown',
      body: form.body.value || 'n/a',
      locale,
    };
    setLoading(true);
    try {
      await db.collection('requests').add(request);
      setLoading(false);
      setMessage({ error: false, msg: messages.success[locale] });
    } catch (e) {
      setLoading(false);
      setMessage({ error: true, msg: messages.error[locale] });
    }
  }

  function validate(field) {
    let error;
    switch (field.name) {
      case 'name':
        if (!field.value) error = errors.missing;
        return error;
      case 'email':
        if (!field.value) error = errors.missing;
        return error;
      case 'body':
        if (!field.value) error = errors.missing;
        return error;
      default:
        return error;
    }
  }

  function renderField(handlers, options) {
    const { handleBlur, handleChange, form } = handlers;
    const { rows, name, multiline, type } = options;
    return (
      <TextField
        margin="dense"
        type={type || 'text'}
        fullWidth
        multiline={multiline || false}
        name={name}
        rows={rows || '1'}
        onChange={handleChange}
        onBlur={handleBlur}
        label={labels[name][locale]}
        value={(form[name] && form[name].value) || ''}
        error={!!(form[name] && form[name].error) || false}
        helperText={
          (form[name] && form[name].error && form[name].error[locale]) || ' '
        }
      />
    );
  }

  return (
    <Fragment>
      <Notification message={message} setMessage={setMessage} />
      {loading ? (
        <Loading />
      ) : (
        <Form
          onSubmit={onSubmit}
          validateFunc={validate}
          validateFields={['name', 'email', 'body']}
          render={handlers => (
            <Fragment>
              <div className={classes.sidebyside}>
                <div className={clsx(classes.field, classes.left)}>
                  {renderField(handlers, { name: 'name' })}
                </div>
                <div className={classes.field}>
                  {renderField(handlers, { name: 'email', type: 'email' })}
                </div>
              </div>
              <div className={classes.field}>
                {renderField(handlers, {
                  name: 'body',
                  multiline: true,
                  rows: 8,
                })}
              </div>

              <div className={classes.actions}>
                <div className={classes.button}>
                  <Button variant="contained" color="primary" type="submit">
                    {labels.send[locale]}
                  </Button>
                </div>
              </div>
            </Fragment>
          )}
        />
      )}
    </Fragment>
  );
}

export default ContactForm;
