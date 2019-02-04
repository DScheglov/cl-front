import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { actionCreator, createBatcher } from '../utils/actions';
import { createReducer, mergePayload, lookupReducer, batching } from '../utils/reducers';
import { exclude } from '../utils/helpers';
import { domainSelector } from '../utils/selectors';

import { APP_PREFIX } from '../app-config';

// Actions ---------------------------------------------------------------------
export const update = actionCreator(`${APP_PREFIX}CONTACTS::UPDATE`);
export const remove = actionCreator(`${APP_PREFIX}CONTACTS::REMOVE`);
export const updateList = actionCreator(`${APP_PREFIX}CONTACT-LIST::UPDATE`);
export const batch = createBatcher(`${APP_PREFIX}CONTACTS::BATCH`);

// Reducers --------------------------------------------------------------------
const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
};

const contact = createReducer(initialState, {
  [update.type]: mergePayload,
});

const byId = createReducer({}, {
  [update.type]: lookupReducer(contact),
});

const ids = createReducer([], {
  [updateList.type]: (_, { payload }) => payload,
  [remove.type]: (state, { payload }) => exclude(state, payload),
});

const contacts = combineReducers({ byId, ids });

export default {
  contacts: batching(batch.type, contacts),
};

// Selectors -------------------------------------------------------------------
export const domain = domainSelector(state => state.contacts);
// we need it to make selectors composible

export const lookup = createSelector(domain, state => state.byId);
export const list = createSelector(domain, state => state.ids);

export const contactList = createSelector(
  list, lookup,
  (idList, byIdMap) => idList.map(id => byIdMap[id] || initialState)
);

export const getContactById = createSelector(
  lookup, (_, contactId) => contactId,
  (byIdMap, contactId) => byIdMap[contactId] || initialState,
);