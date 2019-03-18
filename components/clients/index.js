import React from 'react';

export function Clients() {
  return (
    <div className="container">
      <div className="center">TEST TEST</div>
      <style jsx>{`
        .container {
          background: white;
        }
        .center {
          min-height: calc(100vh - 100px);
          max-width: 1024px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}

export default Clients;
