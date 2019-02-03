import React from 'react';
import { string } from 'prop-types';

const Header = ({ title }) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">{title}</a>
    </nav>
  </header>
);

Header.propTypes = {
  title: string,
};

export default Header;