import React from 'react';

import Social from '../social';

export function Header() {
  return (
    <div className="container">
      <div className="center">
        <div className="logoContainer">
          <img className="logo" src="/static/logo.svg" alt="" />
        </div>
        <div className="social">
          <Social />
        </div>
      </div>
      <style jsx>{`
        .container {
          position: sticky;
          top: -100px;
          display: flex;
          justify-content: center;
          background-color: #ececec;
          min-height: 200px;
        }
        .center {
          flex: 1 1 auto;
          max-width: 1024px;
          position: relative;
        }
        .logoContainer {
          position: absolute;
          bottom: 20px;
          left: 0;
        }
        .logo {
          width: 100%;
          padding: 0 10px;
        }
        .social {
          position: absolute;
          top: 20px;
          right: 0;
        }
      `}</style>
    </div>
  );
}

export default Header;
