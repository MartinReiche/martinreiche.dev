import React, { useReducer, useEffect } from 'react';
import { getState } from '../../state';

const title = {
  de: 'Technologien',
  en: 'Technology Stack'
};

const preloadImgUrls = [
  '/static/subucoola.svg',
  '/static/yar.svg',
  '/static/brandt.jpg',
  '/static/hartwoch.png'
];

const initialState = { loaded: [], ready: false };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, loaded: [...state.loaded, action.payload] };
    case 'ready':
      return { ...state, ready: true };
    default:
      throw new Error(`Unknown action of type ${action.type}`);
  }
}

import texts from './texts';

export function Stack() {
  const [{ loaded, ready, visible }, dispatchLocal] = useReducer(
    reducer,
    initialState
  );
  const [{ locale }] = getState();

  useEffect(() => {
    const images = [];
    preloadImgUrls.forEach(url => {
      const image = new Image();
      image.addEventListener('load', () => onLoadImage(url));
      image.src = url;
      images.push(image);
    });
    return function cleanup() {
      images.forEach(image => {
        image.removeEventListener('load', () => onLoadImage(url));
      });
    };
  }, []);

  useEffect(() => {
    if (loaded.length === preloadImgUrls.length) {
      dispatchLocal({ type: 'ready' });
    }
  }, [loaded.length]);

  function onLoadImage(url) {
    dispatchLocal({ type: 'add', payload: url });
  }

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
              <a href="https://nodejs.org/en/about/" target="_blank">
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
            <div className="description" style={{ marginTop: '0px' }}>
              {texts.next[locale]}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #008090;
        }
        .center {
          opacity: ${ready ? '1' : '0'};
          transition: opacity 200ms ease-out;
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
            align-items: flex-start;
          }
        }
        @media all and (max-width: 425px) {
          .description {
            margin-left: 0px;
            margin-top: 40px;
          }
          .item {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Stack;
