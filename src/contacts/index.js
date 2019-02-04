import reducers, * as store from './store';
import * as thunks from './thunks';

export default { reducers, ...store, ...thunks };