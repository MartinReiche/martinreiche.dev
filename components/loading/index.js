import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

export const Loading = props => (
  <div className="spinner">
    <CircularProgress style={{ color: '#008090' }} size={100} />
    {props.message && (
      <div className="message">
        <Typography style={{ color: '#4d4d4d' }}>{props.message}</Typography>
      </div>
    )}
    <style jsx>{`
      .spinner {
        min-height: ${props.dense ? '0px' : '376px'};
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .message {
        margin-top: 30px;
      }
    `}</style>
  </div>
);

Loading.propTypes = {
  message: PropTypes.string,
  dense: PropTypes.bool
};

export default Loading;
