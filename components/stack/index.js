import React from 'react';
import { getState } from '../../state';

const title = {
  de: 'Technologien',
  en: 'Technology Stack'
};

const reactText = {
  de: (
    <div>
      React.js ist eine deklarative, komponentenbasierte JavaScript Bibliothek
      zur Entwicklung von User Interfaces.
    </div>
  ),
  en: (
    <div>
      React.js is a declarative, component-based JavaScript library for building
      user interfaces.
    </div>
  )
};

const nodeText = {
  de: (
    <div>
      Node.js ist eine JavaScript Laufzeitumgebung, basierend auf Chromes V8
      engine, die es ermöglicht JavaScript außerhalb des browsers zu nutzen.
    </div>
  ),
  en: (
    <div>
      Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
      that enables us to run JavaScript outside of the browser.
    </div>
  )
};

const firebaseText = {
  de: (
    <div>
      Firebase ist eine Entwicklungsplatform für mobile- und Webapplikationen
      die eine Vielzahl an services und Tools zur Entwicklung hochqualitativer
      Applikationen bereitstellt
    </div>
  ),
  en: (
    <div>
      Firebase is a mobile and web app development platform that provides
      developers with a plethora of tools and services to help them develop
      high-quality apps.
    </div>
  )
};

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
            <div className="description">{reactText[locale]}</div>
          </div>
          <div className="item">
            <div className="logo">
              <a href="https://nodejs.org/en/" target="_blank">
                <img src="/static/node.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{nodeText[locale]}</div>
          </div>
          <div className="item">
            <div className="logo">
              <a href="https://firebase.google.com/" target="_blank">
                <img src="/static/firebase.png" alt="" className="image" />
              </a>
            </div>
            <div className="description">{firebaseText[locale]}</div>
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
