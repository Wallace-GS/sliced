import React from 'react';
import { Link } from 'gatsby';

export const Nav = () => {
  let temp;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/pizza">Slicemasters</Link>
        </li>
        <li>
          <Link to="/">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
};
