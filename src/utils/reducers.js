import { isFunc } from './funcs';

// creators --------------------------------------------------------------------
const call = (handler, state, action) => (
  isFunc(handler) ? handler(state, action) : state
);

export const subscription = (actionTypes, handler) => (
  actionTypes.reduce(
    (map, type) => Object.assign(map, { [type]: handler }), {}
  )
);

const ensureState = (state, initialState) => (
  state === undefined ? initialState : state
);

export const createReducer = (initialState, handlers) => (state, action) => call(
  handlers[action.type], ensureState(state, initialState), action
);


// common reducers -------------------------------------------------------------
export const mergePayload = (state, action) => (
  { ...state, ...action.payload }
);

const defIdSelector = action => (
  action != null && action.payload != null
    ? action.payload.id
    : null
);

export const lookupReducer = (entityReducer, idSelector = defIdSelector) =>
  (state, action) => {
    const id = idSelector(action);
    if (id == null) return state;
    const entity = entityReducer(state[id], action);
    if (state[id] === entity) return state;
    return ({ ...state, [id]: entity });
  };

const applyReducer = action => (nState, reducer) => reducer(nState, action);

export const composeReducers = (...reducers) => (
  (state, action) => reducers.reduce(applyReducer(action), state)
);

const INIT = {
  type: '@@SN-FRNT-BATCH::INIT::' + Math.random().toString().slice(2),
};

export const batching = (type, reducer) => (state, action) => (
  action.type !== type ? reducer(state, action) :
  action.actions.length > 0 ? action.actions.reduce(reducer, state) :
  reducer(state, INIT) // we should call reducer in this way to get initial state
);
