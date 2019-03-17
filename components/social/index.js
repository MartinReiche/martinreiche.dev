import React from 'react';

export function Social() {
  return (
    <div className="container">
      <a
        href="https://stackoverflow.com/users/2670764/martin-reiche"
        target="_blank"
      >
        <img className="image" src="/static/so.png" />
      </a>
      <a href="https://twitter.com/martin_reiche" target="_blank">
        <img className="image" src="/static/twitter.png" />
      </a>
      <a href="https://github.com/MartinReiche" target="_blank">
        <img className="image github" src="/static/github.png" />
      </a>
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
