import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export const Layout = ({ children }) => {
  let temp;

  return (
    <div>
      <GlobalStyles />
      <Typography />

      <Nav />
      {children}
      <Footer />
    </div>
  );
};
