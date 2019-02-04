const defaultPayload = payload => ({ payload });

export const actionCreator = (type, mapPayload) => {
  mapPayload = typeof mapPayload === 'function' ? mapPayload : defaultPayload;
  return Object.assign(
    (...args) => ({ type, ...mapPayload(...args) }),
    { type }
  );
};

export const createBatcher = type => Object.assign(
  actions => (
    !Array.isArray(actions) ? actions : // if we got simple action just return it
    actions.length === 1 ? actions[0] : // if we got single item array return it
    ({ type, actions }) // packing actions to dispatch with batching reducer
  ),
  { type }
);

export const all = (dispatch, ...actions) => actions.forEach(dispatch);
