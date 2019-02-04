import { ensureSlash } from '../utils/join';
import { jsonRequest, lightRequest } from './requests';
import FetchError from './FetchError';

const connect = (baseUrl, options = {}) => {
  baseUrl = ensureSlash(baseUrl);
  return {
    get: lightRequest(baseUrl, 'GET', options),
    post: jsonRequest(baseUrl, 'POST', options),
    put: jsonRequest(baseUrl, 'PUT', options),
    patch: jsonRequest(baseUrl, 'PATCH', options),
    delete: lightRequest(baseUrl, 'DELETE', options),
  };
};

export { FetchError };
export default connect;
