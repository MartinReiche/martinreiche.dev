import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

import texts from './texts';
import Item from './item';

const title = {
  de: 'Technologien',
  en: 'Technology Stack',
};

const useStyles = makeStyles({
  container: {
    backgroundColor: '#ececec',
    color: '#303030',
  },
  center: {
    padding: 10,
    margin: 'auto',
  },
  heading: {
    fontFamily: 'Roboto',
    fontWeight: 200,
    color: '#303030',
  },
  items: {
    margin: '100px 0px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
});

export function Stack({ locale }) {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      js: file(relativePath: { eq: "js.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      react: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      node: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      firebase: file(relativePath: { eq: "firebase.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      electron: file(relativePath: { eq: "electron.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mui: file(relativePath: { eq: "mui.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      next: file(relativePath: { eq: "next.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      gatsby: file(relativePath: { eq: "gatsby.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      python: file(relativePath: { eq: "python.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      matlab: file(relativePath: { eq: "matlab.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graphql: file(relativePath: { eq: "graphql.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const items = [
    {
      text: texts.js[locale],
      img: data.js,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      text: texts.node[locale],
      img: data.node,
      url: 'https://nodejs.org/en/about/',
    },
    {
      text: texts.electron[locale],
      img: data.electron,
      url: 'https://electronjs.org/',
    },
    {
      text: texts.react[locale],
      img: data.react,
      url: 'https://reactjs.org/',
    },
    {
      text: texts.mui[locale],
      img: data.mui,
      url: 'https://material-ui.com/',
    },
    {
      text: texts.next[locale],
      img: data.next,
      url: 'https://zeit.co/blog/next',
    },
    {
      text: texts.gatsby[locale],
      img: data.gatsby,
      url: 'https://www.gatsbyjs.org/',
    },
    {
      text: texts.graphql[locale],
      img: data.graphql,
      url: 'https://graphql.org/',
    },
    {
      text: texts.firebase[locale],
      img: data.firebase,
      url: 'https://firebase.google.com/',
    },
    {
      text: texts.python[locale],
      img: data.python,
      url: 'https://www.python.org/',
    },
    {
      text: texts.matlab[locale],
      img: data.matlab,
      url: 'https://www.mathworks.com/products/matlab.html',
    },
  ];

  return (
    <div className={classes.container}>
      <Container maxWidth="lg" className={classes.center}>
        <h1 className={classes.heading}>{title[locale]}</h1>
        <div className={classes.items}>
          {items.map(item => (
            <Item key={item.url} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Stack;
