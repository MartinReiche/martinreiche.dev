import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';
import Clients from '../components/clients';
import Stack from '../components/stack';
import Contact from '../components/contact';

function Home() {
  return (
    <div>
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
