import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';

export const Layout = ({ children }) => {
  let temp;

  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
