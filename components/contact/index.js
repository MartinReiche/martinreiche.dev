import React from 'react';
import { getState } from '../../state';

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
      </div>
      <style jsx>{`
        .container {
          background-color: #ececec;
        }
        .center {
          padding: 10px;
          max-width: 1024px;
          margin: auto;
          height: 50vh;
        }
        .heading {
          font-family: 'Roboto';
          font-weight: 200;
          color: #4d4d4d;
        }
      `}</style>
    </div>
  );
}

export default Contact;
