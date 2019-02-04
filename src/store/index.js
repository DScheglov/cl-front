import { compose } from 'redux';
import { configStore } from '../utils/config-store';
import * as Thunks from './thunks';

import reducers from './reducers';
import middlewares from './middlewares';

const store = configStore(reducers, middlewares);

export const init = compose(store.dispatch, Thunks.init);
export default store;