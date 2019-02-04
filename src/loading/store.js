import { createSelector } from 'reselect';
import { actionCreator } from '../utils/actions';
import { createReducer } from '../utils/reducers';
import { domainSelector } from '../utils/selectors';
import { APP_PREFIX } from '../app-config';

export const start = actionCreator(`${APP_PREFIX}LOADING::START`);
export const end = actionCreator(`${APP_PREFIX}LOADING::END`);

const loading = createReducer({}, {
  [start.type]: (state, { payload }) => ({
    ...state,
    [payload]: true,
  }),
  [end.type]: (state, { payload }) => ({
    ...state,
    [payload]: false,
  })
});

export default { loading };

export const domain = domainSelector(state => state.loading);
export const isLoading = createSelector(
  domain, (_, taskId) => taskId,
  (loadingState,  taskId) => loadingState[taskId] || false
);