import React from 'react';
import { arrayOf, object } from 'prop-types';
import ContactsTableRow from './ContactsTableRow';

const ContactsTable = ({ contacts }) => (
  <div className="row">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(
          contact => <ContactsTableRow key={contact.id} {...contact} />
        )}
      </tbody>
    </table>
  </div>
);

ContactsTable.propTypes = {
  contacts: arrayOf(object),
};

ContactsTable.defaultProps = {
  contacts: require('./data').default,
};

export default ContactsTable;