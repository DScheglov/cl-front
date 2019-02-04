const get = (arr, index) => arr && arr[index];

export const domainFromUrl = (hostname = global.location.hostname) => get(
  // getting domain of third or fourth level
  /^([^.]+)(?:\.[^.]+){2,3}$/.exec(hostname), 1
);

export const mainDomain = (hostname = global.location.hostname) => (
  hostname.split('.').slice(-2).join('.')
);
