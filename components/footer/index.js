import React from 'react';

import Social from '../social';
import { getState } from '../../state';

export function Footer() {
  const [{ locale }] = getState();

  function renderAddress() {
    return locale === 'de' ? (
      <div>
        Martin Reiche <br />
        Full Stack Web Developer <br />
        Wandererstraße 89c <br />
        90431 Nürnberg <br />
        martin@reiche.dev
      </div>
    ) : (
      <div>
        Martin Reiche <br />
        Full Stack Web Developer <br />
        Wandererstraße 89c <br />
        90431 Nuremberg, Germany <br />
        martin@reiche.dev
      </div>
    );
  }

  return (
    <div className="container">
      <div className="footer">
        <div className="contact">{renderAddress()}</div>
        <div className="social">
          <Social />
        </div>
      </div>
      <style jsx>{`
        .container {
          height: calc(100vh - 100px);
          background-color: #008090;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          margin: auto;
          max-width: 1024px;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          color: #e3e3e3;
          padding: 10px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
