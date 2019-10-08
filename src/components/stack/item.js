import React from 'react';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  item: {
    color: '#303030',
    display: 'flex',
    margin: '30px 0px',
    padding: '0 20px',
    '@media all and (max-width: 425px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  logo: {
    width: 100,
    flex: '0 0 100px',
  },
  description: {
    fontFamily: 'Roboto',
    fontWeight: 200,
    fontSize: 20,
    marginLeft: 100,
    flex: '1 1 auto',
    display: 'flex',
    alignItems: 'center',
    '@media all and (max-width: 768px)': {
      marginLeft: 20,
      alignItems: 'flex-different',
    },
    '@media all and (max-width: 425px)': {
      marginLeft: 0,
      marginTop: 40,
    },
  },
});

export default function TechItem({ text, img, url }) {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <div className={classes.logo}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Img fixed={img.childImageSharp.fixed} />
        </a>
      </div>
      <div className={classes.description}>{text}</div>
    </div>
  );
}
