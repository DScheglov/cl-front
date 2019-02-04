import React from 'react';

import Header from './Header';
import ContactsList from './ContactsList';
import ContactModal from '../ContactModal';
import ConfirmModal from '../ConfirmModal';

const App = () => (
  <React.Fragment>
    <Header title="Contacts" />
    <div className="container-fluid my-3">
      <ContactsList />
    </div>
    <ContactModal.Component />
    <ConfirmModal
      modalId="confirmRemoval"
      title="Remove Contact"
      okBtnText="Yes"
      cancelBtnText="No"
    />
  </React.Fragment>
);

export default App;