import React, { useState, useEffect } from 'react';

import { getState, setAboutLoaded } from '../../state';

export function About() {
  const [{ locale, layout }, dispatchGlobal] = getState();

  useEffect(() => {
    const image = new Image();
    image.addEventListener('load', onLoadImage);
    image.src = '/static/portrait_sm.png';
    return function cleanup() {
      image.removeEventListener('load', onLoadImage);
    };
  }, []);

  function onLoadImage() {
    dispatchGlobal(setAboutLoaded());
  }

  function renderText() {
    return locale === 'de' ? (
      <div>
        Als Full Stack Web Developer habe ich mich auf die Entwicklung
        individueller interaktiver Webapplikationen spezialisiert. Ich liebe
        JavaScript und nutze es sowohl zur Entwicklung von Client- als auch
        Serverapplikationen. <br />
        <br /> Ich habe einen neurowissenschaftlichen Hintergrund wodurch ich
        Erfahrungen im Bereich der Analyse komplexer Daten habe. Tief drin bin
        ich noch immer passionierter Wissenschaftler, der es liebt komplexe
        Probleme zu lösen. Fordern Sie mich heraus!
      </div>
    ) : (
      <div>
        As a full-stack web developer I'm specialized in building individually
        tailored rich web applications. I love all things JavaScript hence I'm
        using it heavily both on the server and the client. <br />
        <br />I have a PhD in neuroscience and a strong background in data
        intensive computation. Deep inside I'm a passionate scientist who loves
        to tackle complex problems. Challenge me!{' '}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="center">
        <div className="portrait">
          <img src="/static/portrait_sm.png" alt="" className="image" />
        </div>
        <div className="text">{renderText()}</div>
      </div>
      <style jsx>{`
        .container {
          font-family: 'Roboto';
          font-weight: 200;
          font-size: 20px;
          background-color: #008090;
          padding: 100px 0px;
          overflow-x: hidden;
        }
        .center {
          opacity: ${layout.aboutLoaded ? '1' : '0'};
          transition: opacity 200ms ease-out;
          max-width: 1024px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
        }
        .portrait {
          flex: 0 0 300px;
        }
        .text {
          flex: 1 1 auto;
          margin-left: 50px;
          color: #ececec;
        }
        .image {
          width: 100%;
          border-radius: 50%;
        }
        @media all and (max-width: 768px) {
          .portrait {
            max-width: 300px;
          }
          .center {
            flex-direction: column;
          }
          .text {
            margin-top: 50px;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
