import connect from '../api-client';
import { apiBaseUrl } from '../app-config';

const api = connect(apiBaseUrl);

export default api;