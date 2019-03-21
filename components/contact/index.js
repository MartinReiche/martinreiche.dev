import React, { useState, useEffect } from 'react';
import { getState } from '../../state';
import ContactForm from './form';

const title = {
  de: 'Kontaktieren Sie mich!',
  en: 'Get in touch!'
};

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const [{ locale }] = getState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="center">
          <h1 className="heading">{title[locale]}</h1>
          <div className="form">
            <ContactForm />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #008090;
        }
        .wrapper {
          transform: scaleY(${mounted ? '1' : '0'});
          transform-origin: center;
          transition: transform 200ms ease-out;
          background-color: #ececec;
        }
        .center {
          opacity: ${mounted ? '1' : '0'};
          transition: 200ms opacity 250ms ease-out;
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
