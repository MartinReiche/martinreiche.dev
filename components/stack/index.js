import React from 'react';
import { getState } from '../../state';

const title = {
  de: 'Technologien',
  en: 'Technology Stack'
};

import texts from './texts';

export function Stack() {
  const [{ locale }] = getState();
  return (
    <div className="container">
      <div className="center">
        <h1 className="heading">{title[locale]}</h1>
        <div className="items">
          <div className="item">
            <div className="logo">
              <a href="https://reactjs.org/" target="_blank">
                <img src="/static/react.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.react[locale]}</div>
          </div>
          <div className="item">
            <div className="logo">
              <a href="https://nodejs.org/en/" target="_blank">
                <img src="/static/node.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.node[locale]}</div>
          </div>
          <div className="item">
            <div className="logo">
              <a href="https://firebase.google.com/" target="_blank">
                <img src="/static/firebase.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.firebase[locale]}</div>
          </div>

          <div className="item">
            <div className="logo">
              <a href="https://electronjs.org/" target="_blank">
                <img src="/static/electron.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.electron[locale]}</div>
          </div>

          <div className="item">
            <div className="logo">
              <a href="https://material-ui.com/" target="_blank">
                <img src="/static/mui.svg" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.mui[locale]}</div>
          </div>

          <div className="item">
            <div className="logo">
              <a href="https://zeit.co/blog/next" target="_blank">
                <img src="/static/next.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{texts.next[locale]}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #008090;
        }
        .center {
          padding: 10px;
          max-width: 1024px;
          margin: auto;
        }
        .heading {
          font-family: 'Roboto';
          font-weight: 200;
          color: #ececec;
        }
        .items {
          margin: 100px 0px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
        }
        .item {
          color: #ececec;
          display: flex;
          margin: 30px 0px;
          padding: 0 20px;
        }
        .logo {
          width: 100px;
          flex: 0 0 100px;
        }
        .description {
          font-family: 'Roboto';
          font-weight: 200;
          font-size: 20px;
          margin-left: 100px;
          flex: 1 1 auto;
          display: flex;
          align-items: center;
        }
        .image {
          width: 100%;
        }
        @media all and (max-width: 768px) {
          .description {
            margin-left: 20px;
          }
        }
        @media all and (max-width: 425px) {
          .description {
            margin-left: 0px;
            margin-top: 20px;
          }
          .item {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default Stack;
