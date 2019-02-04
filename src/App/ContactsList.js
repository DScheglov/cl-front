import React from 'react';
import { bool, arrayOf, object, func } from 'prop-types';
import { connect } from 'react-redux';

import ContactsTable from '../ContactsTable';
import Contacts from '../contacts';

import Loader from '../Loader';
import Loading from '../loading';
import EmptyList from './EmptyList';
import ContactModal from '../ContactModal';
import { openConfirmRemoval } from '../ConfirmModal/thunks';

const LargeCenteredLoader = () => (
  <div className="d-flex justify-content-center p-5">
    <Loader />
    <Loader />
    <Loader />
  </div>
);

const ContactList = ({ isLoading, contacts, edit, remove, create }) => (
  isLoading ? <LargeCenteredLoader /> :
  contacts.length > 0 ? <ContactsTable {...{ contacts, edit, remove }} /> :
  <EmptyList create={create} />
);

if (process.env.NODE_ENV !== 'production') {
  ContactList.propTypes = {
    isLoading: bool,
    contacts: arrayOf(object),
    edit: func,
    remove: func,
    create: func,
  };
}

const state2Props = state => ({
  isLoading: Loading.isLoading(state, 'CONTACTS'),
  contacts: Contacts.contactList(state),
});

const actions = {
  edit: ContactModal.openEditModal,
  remove: openConfirmRemoval,
  create: ContactModal.openCreateModal,
};

export default connect(state2Props, actions)(ContactList);