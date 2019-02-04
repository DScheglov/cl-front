import React from 'react';
import { string } from 'prop-types';

const Loader = ({ className }) => (
  <div className={`spinner-grow ${className}`} role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

Loader.propTypes = {
  className: string,
};

export default Loader;
