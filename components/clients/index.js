import React from 'react';
import { getState } from '../../state';

const title = {
  de: 'Kunden',
  en: 'Customers'
};

export function Clients() {
  const [{ locale }] = getState();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="center">
          <h1 className="heading">{title[locale]}</h1>
          <div className="brands">
            <div className="brand" style={{ width: '80px' }}>
              <a href="https://subucoola.de" target="_blank">
                <img src="/static/subucoola.svg" alt="" className="image" />
              </a>
            </div>
            <div className="brand" style={{ width: '100px' }}>
              <a href="https://weareyar.de" target="_blank">
                <img src="/static/yar.svg" alt="" className="image" />
              </a>
            </div>
            <div className="brand" style={{ width: '100px' }}>
              <img src="/static/brandt.jpg" alt="" className="image" />
            </div>
            <div className="brand" style={{ width: '50px' }}>
              <a
                href="https://www.instagram.com/hartwoch/?hl=en"
                target="_blank"
              >
                <img src="/static/hartwoch.png" alt="" className="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: #008090;
        }
        .wrapper {
          background: white;
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
        .brands {
          margin: 100px 0px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .brand {
          margin: 30px 70px;
        }
        .image {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Clients;
