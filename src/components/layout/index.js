import React from 'react';
import Header from './header';
import Footer from './footer';

export function Layout({ children, path, locale }) {
  return (
    <div>
      <Header path={path} />
      {children}
      <Footer locale={locale} />
    </div>
  );
}
