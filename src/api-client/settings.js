export const CONTENT_TYPES = [
  'application/json'
];

export const JSON_HEADERS = {
  Accept: CONTENT_TYPES.join(', '),
  'Content-Type': CONTENT_TYPES[0],
};

export const COMMON_SETTINGS = {
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // *client, no-referrer
};
