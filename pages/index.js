import React, { Fragment } from 'react';

import { getState } from '../state';
import { Header, Footer } from '../components/layout';
import About from '../components/about';
import Clients from '../components/clients';
import Stack from '../components/stack';
import Contact from '../components/contact';
import { Head } from '../components/utility';

function Home() {
  const [{ layout }] = getState();
  return (
    <div>
      <Head title="Martin Reiche - Full Stack Web Developer" />
      <Header />
      <div className="content">
        <About />
        <Clients />
        <Stack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
