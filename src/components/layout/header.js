import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Social from './social';

const useStyles = makeStyles(() => ({
  container: {
    zIndex: 2,
    position: 'sticky',
    top: -100,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ececec',
    minHeight: 200,
  },
  center: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logoContainer: {
    marginBottom: 10,
    left: 0,
  },
  social: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
}));

export function Header() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.center}>
        <div className={classes.logoContainer}>
          <Img fixed={data.logo.childImageSharp.fixed} />
        </div>
        <div className={classes.social}>
          <Social />
        </div>
      </Container>
    </div>
  );
}

export default Header;
