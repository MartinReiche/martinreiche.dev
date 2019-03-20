import React from 'react';
import { getState } from '../../state';
import ContactForm from './form';

const title = {
  de: 'Kontaktieren Sie mich',
  en: 'Get in touch'
};

export function Contact() {
  const [{ locale }] = getState();
  return (
    <div className="container">
      <div className="center">
        <h1 className="heading">{title[locale]}</h1>
        <div className="form">
          <ContactForm />
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #ececec;
        }
        .center {
          padding: 10px;
          max-width: 1024px;
          margin: auto;
        }
        .heading {
          font-family: 'Roboto';
          font-weight: 200;
          color: #4d4d4d;
        }
        .form {
          margin: 100px 0;
        }
      `}</style>
    </div>
  );
}

export default Contact;
