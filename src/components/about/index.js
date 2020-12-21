import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '@material-ui/core';
import Img from 'gatsby-image';

const useStyles = makeStyles(() => ({
  container: {
    fontWeight: 200,
    fontSize: 20,
    backgroundColor: '#089',
    paddingTop: 100,
    paddingBottom: 100,
    overflowX: 'hidden',
    height: 'calc(100vh - 300px)',
  },
  center: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    '@media all and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  portrait: {
    flex: '1 1 auto',
    '@media all and (max-width: 768px)': {
      maxWidth: 300,
    },
  },
  text: {
    flex: '1 1 auto',
    marginLeft: 50,
    color: '#ececec',
    '@media all and (max-width: 768px)': {
      marginTop: 50,
      marginLeft: 0,
    },
  },
  image: {
    borderRadius: '50%',
  },
}));

function text(locale) {
  return locale === 'de' ? (
    <div>
        Experimental Psychologist. Developer. Data Analytics. Automotive.
    </div>
  ) : (
    <div>
        Experimental Psychologist. Developer. Data Analytics. Automotive.
    </div>
  );
}

export function About({ locale }) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "portrait_sm.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.center}>
        <div className={classes.portrait}>
          <Img
            fixed={data.portrait.childImageSharp.fixed}
            className={classes.image}
          />
        </div>
        <div className={classes.text}>{text(locale)}</div>
      </Container>
    </div>
  );
}

export default About;
