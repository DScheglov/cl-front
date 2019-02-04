import { actionCreator } from '../utils/actions';
import { createReducer } from '../utils/reducers';
import { domainSelector } from '../utils/selectors';
import { createSelector } from 'reselect';

export const activate = actionCreator('MDL::DISPATCHER::ACTIVATE');
export const deactivate = actionCreator('MDL::DISPATCHER::DEACTIVATE');

const modalDispatcher = createReducer({}, {
  [activate.type]: (state, { payload }) => ({
    ...state,
    [payload]: true,
  }),
  [deactivate.type]: (state, { payload }) => ({
    ...state,
    [payload]: false,
  }),
});

export default { modalDispatcher };

export const domain = domainSelector(state => state.modalDispatcher);

export const isActive = createSelector(
  domain, (_, modalId) => modalId,
  (modalState, modalId) => modalState[modalId] || false,
);