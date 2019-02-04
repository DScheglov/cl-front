import { compose } from 'redux';
import { join } from '../utils/join';
import {
  commonSettings,
  jsonHeaders,
  stringify,
  check,
  toJson,
  bindNullData,
  suppresCancel,
  shouldSuppresCancel,
} from './helpers';

const initWith = (actualUrl, method, common, data, options) => ({
  ...commonSettings(actualUrl),
  method,
  headers: jsonHeaders(common, options),
  ...stringify(data),
});

export const baseRequest = dataParser => (
  (baseUrl, method, common = {}) => (url, data, options = {}) => {
    const actualUrl = join(baseUrl, url);
    const init = initWith(actualUrl, method, common, data, options);
    return new Promise(
      (resolve, reject) => {
        fetch(actualUrl, init)
          .then(check)
          .then(dataParser)
          .then(resolve)
          .catch(
            shouldSuppresCancel(options) ? suppresCancel(reject) : reject
          );
      }
    );
  }
);

export const jsonRequest = baseRequest(toJson);

export const lightRequest = compose(bindNullData, jsonRequest);
