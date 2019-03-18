import React from 'react';

import { getState } from '../../state';

export function About() {
  const [{ locale }] = getState();
  function renderText() {
    return locale === 'de' ? (
      <div>DEUTCH</div>
    ) : (
      <div>
        I am a full stack web developer specialized in building individually
        tailored rich web applications. I love all things JavaScript hence I'm
        using it heavily both on the server and the client. <br />
        <br />I have a PhD in neuroscience and a strong background in data
        intensive computation. Deep inside I'm a passionate scientist that loves
        to tackle complex problems. Challenge me!{' '}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="center">
        <div className="portrait">
          <img src="/static/avatar.jpg" alt="" className="image" />
        </div>
        <div className="text">{renderText()}</div>
      </div>
      <style jsx>{`
        .container {
          background-color: #008090aa;
          background: #008090aa url('/static/about_bg.svg') no-repeat left top;
        }
        .center {
          min-height: 120vh;
          max-width: 1024px;
          margin: auto;
          display: flex;
          padding: 100px 10px;
        }
        .portrait {
        }
        .text {
          padding: 50px 10px 5050;
        }
        .image {
          flex: 1 1 auto;
          max-width: 300px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export default About;
