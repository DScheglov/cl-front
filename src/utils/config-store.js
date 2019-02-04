import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const __DEV__ = process.env.NODE_ENV !== 'production';

const withDevTools = (
  middlewareEnhancer,
  devTools = global.__REDUX_DEVTOOLS_EXTENSION__
) => (
  __DEV__ && typeof devTools === 'function'
    ? compose(middlewareEnhancer, devTools())
    : middlewareEnhancer
);

export const configStore = (
  reducers,
  middlewares,
  initalState
) => createStore(
  combineReducers(reducers),
  initalState,
  withDevTools(applyMiddleware(...middlewares))
);
