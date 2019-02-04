import FetchError from './FetchError';
import { CONTENT_TYPES, COMMON_SETTINGS, JSON_HEADERS } from './settings';


export const check = response => (
  response.ok
    ? Promise.resolve(response)
    : FetchError.reject(response)
);

const doesInclude = (obj, ...values) => (
  obj != null && typeof obj.includes === 'function' && values.some(
    v => obj.includes(v)
  )
);

export const toJson = response => (
  doesInclude(response.headers.get('content-type'), ...CONTENT_TYPES)
    ? response.json()
    : null
);

const get = (obj, propIndex) => obj && obj[propIndex];

const extractDomain = url => get(/^[^/]*\/\/([^/:]+).*$/.exec(url), 1);

export const isSameDomain = url => {
  const domain = extractDomain(url);
  return domain == null || domain === extractDomain(global.location.href);
};

export const cors = url => (
  isSameDomain(url) ? 'same-origin' : 'cors'
);

export const commonSettings = url => ({
  ...COMMON_SETTINGS,
  mode: cors(url)
});

export const jsonHeaders = (common, options) => ({
  ...JSON_HEADERS,
  ...(common && common.headers),
  ...(options && options.headers),
});

export const stringify = data => (
  data ? { body: JSON.stringify(data), } : null
);

export const bindNullData = (fn, value) => (url, options) => fn(url, value, options);

export const isCancelError = err => (
  err != null &&
  err instanceof TypeError &&
  err.message === 'Failed to fetch'
);

export const suppresCancel = reject => err => (
  // Chrome, Firefox throw the TypeError when user cancels
  // loading by clicking "Stop" on the address-line
  isCancelError(err) ? undefined : reject(err)
);

export const shouldSuppresCancel = options => (
  options.suppresCancel == null || options.suppresCancel
);
