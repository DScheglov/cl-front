import { compose } from 'redux';

import * as api from '../api/contacts';
import { listToPayload, updateContact } from './mappers';
import { batch, remove } from './store';

export const loadAllContacts = () => dispatch => api
  .getAll()
  .then(compose(
    dispatch, batch, listToPayload
  ));

export const createContact = contact => dispatch => api	
  .create(contact)
  .then(compose(
    dispatch, updateContact
  ));

export const patchContact = contact => dispatch => api	
  .update(contact)
  .then(compose(
    dispatch, updateContact
  ));

export const removeContact = id => dispatch => api	
  .remove({ id })
  .then(compose(
    dispatch, () => remove(id)
  ));