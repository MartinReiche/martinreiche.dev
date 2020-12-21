import React from 'react';
import { Layout } from '../components/layout';
import Seo from '../components/seo';
import About from '../components/about';

export default ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <Seo locale={locale} />
    <About locale={locale} />
  </Layout>
);
