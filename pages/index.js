import React from 'react';

import { Header, Footer } from '../components/layout';
import About from '../components/about';
import Clients from '../components/clients';
import Stack from '../components/stack';
import Contact from '../components/contact';
import { Head } from '../components/utility';

function Home() {
  return (
    <div>
      <Head title="Martin Reiche - Full Stack Web Developer" />
      <Header />
      <About />
      <Clients />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
