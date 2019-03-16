import React from 'react';

export function Social() {
  return (
    <div className="container">
      <img className="image" src="/static/so.png" />
      <img className="image" src="/static/twitter.png" />
      <img className="image github" src="/static/github.png" />
      <style jsx>{`
        .container {
          height: 50px;
        }
        .image {
          height: 100%;
        }
        .github {
          padding: 6%;
        }
      `}</style>
    </div>
  );
}

export default Social;
