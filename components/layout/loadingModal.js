import React, { Fragment } from 'react';
import { CircularProgress } from '@material-ui/core';

export function LoadingModal() {
  return (
    <Fragment>
      <div className="loading">
        <CircularProgress size={150} style={{ color: 'white' }} />
      </div>
      <style jsx>{`
        .loading {
          z-index: 2;
          border: 1px solid red;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Fragment>
  );
}
