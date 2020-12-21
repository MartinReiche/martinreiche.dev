import React from 'react';
import { Layout } from '../components/layout';
import Seo from '../components/seo';
import About from '../components/about';
import Clients from '../components/clients';
import Stack from '../components/stack';
import Contact from '../components/contact';

export default ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <Seo locale={locale} />
    <About locale={locale} />
    <Stack locale={locale} />
    {/*<Clients locale={locale} />*/}
    {/*<Contact locale={locale} />*/}
  </Layout>
);
