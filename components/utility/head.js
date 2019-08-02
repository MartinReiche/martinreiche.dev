import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

import { BASE_URL } from '../../config';

const description =
  'Fullstack Webentickler aus Nürnberg. Entwicklung individueller Webapplikationen und Webseiten. Spezialist für JavaScript: React.js, Node.js, Firebase, Electron, Material UI, Next.js';
const keywords =
  'Webentwickler,Webentwiclung,Freelancer,Nürnberg,Erlangen,Fürth,Programmierer,Javascript,Ruby,Python,Node,React,Graphql';
export function Head(props) {
  const { og, title } = props;

  return (
    <NextHead>
      <title>{title || 'Martin Reiche - Full Stack Web Developer'}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        property="og:title"
        content={title || 'Martin Reiche - Full Stack Web Developer'}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={og && og.url ? BASE_URL + og.url : BASE_URL}
      />
      <meta property="og:image:width" content="285" />
      <meta property="og:image:height" content="428" />
      <meta
        property="og:image"
        content={og && og.img ? og.img : BASE_URL + '/static/og-image.jpg'}
      />
      <meta
        property="og:description"
        content={(og && og.description) || description}
      />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:locale:alternate" content="en_US" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  og: PropTypes.object
};

export default Head;
