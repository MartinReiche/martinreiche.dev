import '../utils/bootstrap';
import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Header />
      <div className="body">Welcome to Next.js!</div>
      <Footer />
      <style jsx>{`
        .body {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default Home;
