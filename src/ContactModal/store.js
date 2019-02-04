import { actionCreator } from '../utils/actions';

import { APP_PREFIX } from '../app-config';
import { createReducer, mergePayload } from '../utils/reducers';
import { domainSelector } from '../utils/selectors';
import { createSelector } from 'reselect';

export const update = actionCreator(`${APP_PREFIX}CONTACT-MODAL::UPDATE`);
export const reset = actionCreator(`${APP_PREFIX}CONTACT-MODAL::RESET`);

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
};

const contactModalForm = createReducer(initialState, {
  [update.type]: mergePayload,
  [reset.type]: () => initialState,
});

export default { contactModalForm };

export const getContactForm = domainSelector(state => state.contactModalForm);
export const isValid = createSelector(
  getContactForm,
  ({ firstName, lastName }) => (
    firstName !== '' || lastName !== ''
  )
);
