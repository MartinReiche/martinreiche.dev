import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

import { BASE_URL } from '../../config';

const logo = '/static/logo.png';

export function Head(props) {
  const { og, title } = props;

  return (
    <NextHead>
      <title>
        {title ||
          'Subucoola Textildruckerei - T-Shirt Druck in Nürnberg, Fürth, Erlangen'}
      </title>

      <meta
        name="description"
        content="Textildruck in Nürnberg ✓ Mehrfarbige Kleinauflage (ab 10 Stück) bis zur Großauflage. Veredelt mit GOTS Discharge, Siebdruck, Digitaldruck, Labelservice, Hangtags! FairWearShirts = Standard"
      />
      <meta property="og:title" content={title || 'Subucoola'} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={og && og.url ? BASE_URL + og.url : BASE_URL}
      />
      <meta
        property="og:image"
        content={og && og.img ? og.img : BASE_URL + logo}
      />
      {og && og.description && (
        <meta property="og:description" content={og.description} />
      )}
      <meta property="og:locale" content="de_DE" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:site_name" content="Subucoola" />
    </NextHead>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  og: PropTypes.object
};

export default Head;
