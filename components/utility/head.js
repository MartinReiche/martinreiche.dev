import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

import { BASE_URL } from '../../config';

const logo = '/static/portrait_sm.png';
const description =
  'Full Stack Webentickler aus Nürnberg ✓ Entwicklung individueller Webapplikationen. Spezialist für JavaScript: React.js, Node.js, Firebase, Electron, Material UI, Next.js';

export function Head(props) {
  const { og, title } = props;

  return (
    <NextHead>
      <title>{title || 'Martin Reiche - Full Stack Web Developer'}</title>
      <meta
        name="description"
        content="Full Stack Webentickler aus Nürnberg ✓ Entwicklung individueller Webapplikationen. Spezialist für JavaScript: React.js, Node.js, Firebase, Electron, Material UI, Next.js"
      />
      <meta property="og:title" content={title || 'Martin Reiche'} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={og && og.url ? BASE_URL + og.url : BASE_URL}
      />
      <meta
        property="og:image"
        content={og && og.img ? og.img : BASE_URL + logo}
      />
      {og && og.description ? (
        <meta property="og:description" content={og.description} />
      ) : (
        <meta property="og:description" content={description} />
      )}
      <meta property="og:locale" content="de_DE" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta
        property="og:site_name"
        content="Martin Reiche - Full Stack Web Developer"
      />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  og: PropTypes.object
};

export default Head;
