import React, { useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Loading from '../loading';
import { Form } from '../forms';

// import validateEmail from '../../utils/validateEmail';

import {
  getState,
  startLoading,
  stopLoading,
  dispatchMessage,
  dispatchError
} from '../../state';
// import { initFirebase } from '../../utils';

const messages = {
  success: {
    de: 'Vielen Dank für Ihre Kontaktanfrage.',
    en: 'Thank you very muich for your request.'
  }
};

const labels = {
  name: { de: 'Name *', en: 'Name *' },
  email: { de: 'Email *', en: 'Email *' },
  body: { de: 'Kommentar *', en: 'Comment *' },
  send: { de: 'Absenden', en: 'Send' }
};
const errors = {
  missing: { de: 'ist erforderlich', en: 'is required' }
};

export function ContactForm() {
  const [{ locale, contact }, dispatch] = getState();

  function onSubmit(form) {
    // const firebase = initFirebase();
    // const db = firebase.firestore();
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
      dispatch(dispatchMessage(messages.success[locale]));
    }, 2000);

    const request = {
      name: form.name || 'unknown',
      email: form.email || 'unknown',
      body: form.body || 'n/a',
      locale
    };

    console.log(request);

    // db.colle

    // return (

    //       console.log(request);

    //       // return db.collection('requests').add(request);
    //     })
    //     // .then(() => {
    //     //   setAccepted([]);
    //     //   setRejected([]);
    //     //   setForm({});
    //     //   dispatch(contactStopLoading());
    //     //   dispatch(
    //     //     dispatchMessage(
    //     //       locale === 'de'
    //     //         ? 'Vielen Dank für Deine Kontaktanfrage.'
    //     //         : 'Thank you for your request.'
    //     //     )
    //     //   );
    //     // })
    //     .catch(e => {
    //       console.log(e);

    //       dispatch(contactStopLoading());
    //       dispatch(
    //         dispatchError(
    //           locale === 'de'
    //             ? 'Es ist ein Fehler aufgetreten, versuch es später noch einmal.'
    //             : 'An error has occurred, try again later.'
    //         )
    //       );
    //     })
    // );
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
      {contact.loading ? (
        <Loading />
      ) : (
        <Form
          onSubmit={onSubmit}
          validateFunc={validate}
          validateFields={['name', 'email', 'body']}
          render={handlers => (
            <Fragment>
              <div className="sidebyside">
                <div className="field left">
                  {renderField(handlers, { name: 'name' })}
                </div>
                <div className="field">
                  {renderField(handlers, { name: 'email', type: 'email' })}
                </div>
              </div>
              <div className="field">
                {renderField(handlers, {
                  name: 'body',
                  multiline: true,
                  rows: 8
                })}
              </div>

              <div className="actions">
                <div className="button">
                  <Button variant="contained" color="primary" type="submit">
                    {labels.send[locale]}
                  </Button>
                </div>
              </div>
            </Fragment>
          )}
        />
      )}
      <style jsx>{`
        .sidebyside {
          flex: 1 1 auto;
          display: flex;
          justify-content: space-between;
        }
        .field {
          flex: 1 1 auto;
        }
        .actions {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100px;
        }
        .button {
          padding: 0 20px;
        }
        .left {
          padding-right: 10px;
        }
        @media all and (max-width: 500px) {
          .sidebyside {
            flex-direction: column;
          }
          .left {
            padding: 0;
          }
        }
      `}</style>
    </Fragment>
  );
}

export default ContactForm;
