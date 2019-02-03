import React from 'react';
import { string } from 'prop-types';


const ContactsTableRow = ({ id, firstName, lastName, phone }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{phone}</td>
    <td>
      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group mr-2" role="group">
          <button type="button" className="btn btn-info btn-sm">Edit</button>
          <button type="button" className="btn btn-danger btn-sm">Remove</button>
        </div>
      </div>
    </td>
  </tr>
);

ContactsTableRow.propTypes = {
  id: string,
  firstName: string,
  lastName: string,
  phone: string,
};

export default ContactsTableRow;