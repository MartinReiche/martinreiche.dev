import React from 'react';

export function Social() {
  return (
    <div className="container">
      <div className="item">
        <a
          href="https://stackoverflow.com/users/2670764/martin-reiche"
          target="_blank"
        >
          <img className="image" src="/static/so.png" />
        </a>
      </div>
      <div className="item">
        <a href="https://twitter.com/martin_reiche" target="_blank">
          <img className="image" src="/static/twitter.png" />
        </a>
      </div>
      <div className="item">
        <a href="https://github.com/MartinReiche" target="_blank">
          <img className="image github" src="/static/github_pad.png" />
        </a>
      </div>
      <style jsx>{`
        .container {
          height: 50px;
          display: flex;
        }
        .item {
          width: 50px;
        }
        .image {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Social;
