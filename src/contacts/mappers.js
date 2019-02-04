import { compose } from 'redux';
import { updateList, update } from './store';

const filterNulls = ({ id, firstName, lastName, phone, address }) => ({
  id,
  firstName: firstName || '',
  lastName: lastName || '',
  phone: phone || '',
  address: address || '',
});

export const updateContact = compose(update, filterNulls);

export const listToPayload = contacts => [
  ...contacts.map(updateContact),
  updateList(contacts.map(({ id }) => id)),
];