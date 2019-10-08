import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const title = {
  de: 'Kunden',
  en: 'Customers',
};

const useStyles = makeStyles({
  container: {
    background: '#008090',
  },
  wrapper: {
    background: '#0894',
  },
  center: {
    padding: 10,
    margin: 'auto',
  },
  heading: {
    fontFamily: 'Roboto',
    fontWeight: 200,
    color: '#ececec',
  },
  brands: {
    margin: '100px 0px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    margin: '30px 70px',
  },
});

export function Clients({ locale }) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      subucoola: file(relativePath: { eq: "subucoola.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yar: file(relativePath: { eq: "yar.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bemona: file(relativePath: { eq: "bemona.png" }) {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hartwoch: file(relativePath: { eq: "hartwoch.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Container maxWidth="lg" className={classes.center}>
          <h1 className={classes.heading}>{title[locale]}</h1>
          <div className={classes.brands}>
            <div className={classes.brand} style={{ width: '80px' }}>
              <a
                href="https://subucoola.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fixed={data.subucoola.childImageSharp.fixed} />
              </a>
            </div>
            <div className={classes.brand} style={{ width: '100px' }}>
              <a
                href="https://weareyar.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fixed={data.yar.childImageSharp.fixed} />
              </a>
            </div>
            <div className={classes.brand} style={{ width: '100px' }}>
              <a
                href="https://bemona.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fixed={data.bemona.childImageSharp.fixed} />
              </a>
            </div>
            <div className={classes.brand} style={{ width: '50px' }}>
              <a
                href="https://www.instagram.com/hartwoch/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Img fixed={data.hartwoch.childImageSharp.fixed} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Clients;
