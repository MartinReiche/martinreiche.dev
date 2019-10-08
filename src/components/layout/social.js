import React from 'react';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(() => ({
  container: {
    height: 50,
    display: 'flex',
  },
  item: {
    width: 50,
  },
}));

export function Social() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      so: file(relativePath: { eq: "so.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github_pad.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <a
          href="https://stackoverflow.com/users/2670764/martin-reiche"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={data.so.childImageSharp.fixed} />
        </a>
      </div>
      <div className={classes.item}>
        <a
          href="https://twitter.com/martin_reiche"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={data.twitter.childImageSharp.fixed} />
        </a>
      </div>
      <div className={classes.item}>
        <a
          href="https://github.com/MartinReiche"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fixed={data.github.childImageSharp.fixed} />
        </a>
      </div>
    </div>
  );
}

export default Social;
