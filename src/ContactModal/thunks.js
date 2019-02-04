import { compose } from 'redux';
import connected from 'handy-thunks/lib/connected';
import onlyIf from 'handy-thunks/lib/onlyIf';
import Contacts from '../contacts';
import Modals from '../modal-dispatcher';
import { modalId } from './modal-id';
import { reset, update, getContactForm } from './store';
import { withLoading } from '../loading/with-loading';

const refresh = compose(
  onlyIf(Boolean),
  withLoading('CONTACTS'),
)(Contacts.loadAllContacts);

export const openCreateModal = () => dispatch => {
  dispatch(reset());
  return dispatch(
    Modals.open(modalId)
  ).then(
    compose(dispatch, refresh)
  );
};

const copyContact = connected(Contacts.getContactById)(update);

export const openEditModal = contactId => dispatch => {
  dispatch(
    copyContact(contactId)
  );
  return dispatch(
    Modals.open(modalId)
  );
};

export const create = withLoading('CONTACT::PROCESSING')(
  connected(getContactForm)(Contacts.createContact)
);

export const patch = withLoading('CONTACT::PROCESSING')(
  connected(getContactForm)(Contacts.patchContact)
);