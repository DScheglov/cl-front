import React from 'react';
import { arrayOf, object, func } from 'prop-types';
import ContactsTableRow from './ContactsTableRow';

const ContactsTable = ({ contacts, edit, remove }) => (
  <div className="row">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(
          (contact, index) => <ContactsTableRow key={contact.id} {...{ edit, remove, index} } {...contact} />
        )}
      </tbody>
    </table>
  </div>
);

if (process.env.NODE_ENV === 'production') {
  ContactsTable.propTypes = {
    contacts: arrayOf(object),
    edit: func,
    remove: func,
  };
}

export default ContactsTable;