import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, locale, meta, title, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title {
              de
              en
            }
            description {
              de
              en
            }
            author
            keywords {
              de
              en
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;
  const metaKeywords = keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={metaTitle[locale]}
      titleTemplate={`%s | ${metaTitle[locale]}`}
      meta={[
        {
          name: `description`,
          content: metaDescription[locale],
        },
        {
          name: `keywords`,
          content: metaKeywords[locale].join(),
        },
        {
          property: `og:title`,
          content: metaTitle[locale],
        },
        {
          property: `og:description`,
          content: metaDescription[locale],
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle[locale],
        },
        {
          name: `twitter:description`,
          content: metaDescription[locale],
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  locale: `de`,
  meta: [],
  description: null,
  title: null,
  keywords: null,
};

SEO.propTypes = {
  description: PropTypes.object,
  locale: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.object,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
