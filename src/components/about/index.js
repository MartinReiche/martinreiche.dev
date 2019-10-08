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
      Ich bin Webentwickler und Data Scientist aus Nürnberg und habe ich mich
      auf die Entwicklung individueller interaktiver Webapplikationen
      spezialisiert. Ich arbeite mit modernen Webtechnologien zur Entwicklung
      von Client- und Serverapplikationen mithilfe von CI/CD Pipelines und
      cloudbasierter Infrastruktur.
      <br />
      <br />
      Ich habe einen starken wissenschaftlichen Hintergrund im Bereich der
      Analyse komplexer Daten, experimenteller Methodik und befasse mich gern
      mit komplexen Problemen.
    </div>
  ) : (
    <div>
      I am a full-stack web developer and data scientist from Nuremberg in
      Germany. I specialized in building individually tailored rich web
      applications. I use modern web technologies both on the server and the
      client and I leverage the power of CI/CD pipelines and cloud-based
      infrastructure.
      <br />
      <br />I have a strong scientific background related to data analysis,
      scientific methodology and I like to tackle complex problems.
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
