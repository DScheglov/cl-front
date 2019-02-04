import React from 'react';
import { string, number, func } from 'prop-types';


const ContactsTableRow = ({ id, index, firstName, lastName, phone, edit, remove }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>
      <button type="button" className="btn btn-link" onClick={() => edit(id)}>
        {firstName}{' '}{lastName}
      </button>
    </td>
    <td>{phone}</td>
    <td>
      <button className="btn btn-danger btn-sm" onClick={() => remove(id)}>
        Delete
      </button>
    </td>
  </tr>
);

ContactsTableRow.propTypes = {
  id: string,
  index: number,
  firstName: string,
  lastName: string,
  phone: string,
  edit: func,
  remove: func,
};

export default ContactsTableRow;