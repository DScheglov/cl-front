import loading from 'handy-thunks/lib/loading';
import { start, end } from './store';

export const withLoading = loading(start, end);