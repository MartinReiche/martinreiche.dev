import React, { useReducer, useEffect } from 'react';
import { getState } from '../../state';

const title = {
  de: 'Kunden',
  en: 'Customers'
};

const preloadImgUrls = [
  '/static/subucoola.svg',
  '/static/yar.svg',
  '/static/brandt.jpg',
  '/static/hartwoch.png'
];

const initialState = { loaded: [], ready: false, visible: false };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, loaded: [...state.loaded, action.payload] };
    case 'ready':
      return { ...state, ready: true };
    case 'show':
      return { ...state, visible: true };
    default:
      throw new Error(`Unknown action of type ${action.type}`);
  }
}

export function Clients() {
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

  useEffect(() => {
    const timeout = setTimeout(() => dispatchLocal({ type: 'show' }), 250);
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [ready]);

  function onLoadImage(url) {
    dispatchLocal({ type: 'add', payload: url });
  }

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
          transform: scaleY(${ready ? '1' : '0'});
          transform-origin: center;
          transition: transform 200ms ease-out;
        }
        .center {
          opacity: ${ready ? '1' : '0'};
          transition: 200ms opacity 300ms ease-out;
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
