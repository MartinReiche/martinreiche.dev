import '../utils/bootstrap';
import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';
import Clients from '../components/clients';

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default Home;
