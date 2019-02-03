import React from 'react';
import Header from './Header';
import ContactsTable from '../ContactsTable';
// import PropTypes from 'prop-types';

const App = () => (
  <React.Fragment>
    <Header title="Contacts" />
    <div className="container-fluid">
      <ContactsTable />
    </div>
  </React.Fragment>
);

export default App;