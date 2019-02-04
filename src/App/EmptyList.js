import React from 'react';
import { func } from 'prop-types';

const EmptyList = ({ create }) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Contacts</h1>
      <p className="lead">
        <b>Contact List</b> is a simple tool that allows you to manage you contacts.
        With this tool you are able to create, update and delete contacts.
      </p>
      <hr className="my-4" />
      <p>
        There is no contacts in your list. To get started with <b>Contact List</b>
        {' '}create new contact.
      </p>
      <button className="btn btn-primary" role="button" onClick={create}>
        Create Contact
      </button>
    </div>
  </div>
);

if (process.env.NODE_ENV !== 'production') {
  EmptyList.propTypes = {
    create: func,
  };
}

export default EmptyList;