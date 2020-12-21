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
            title 
            descriptionEn
            descriptionDe
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

  const metaDescriptionDe = description || site.siteMetadata.descriptionDe;
  const metaDescriptionEn = description || site.siteMetadata.descriptionEn;
  const metaTitle = title || site.siteMetadata.title;
  const metaKeywords = keywords || site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: locale === 'de' ? metaDescriptionDe : metaDescriptionEn,
        },
        {
          name: `keywords`,
          content: metaKeywords[locale].join(),
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescriptionEn,
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
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescriptionEn,
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
