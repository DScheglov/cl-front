import url from 'url';

export const ensureSlash = urlStr => (
  /\/$/.test(urlStr) ? urlStr : `${urlStr}/`
);
const startWith = (str, sub) => str.substr(0, sub.length) === sub;
export const normalize = str => (
  (startWith(str, 'file://')
    ? str.replace(/(\/{0,3})\/*/g, '$1')
    : str.replace(/:\//g, '://').replace(/([^:\s%\3A])\/+/g, '$1/')
  )
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/(\?.+)\?/g, '$1&')
);

export const join = (baseUrl, ...urls) => urls.reduce(
  (base, u) => url.resolve(base, normalize('' + u)), ('' + baseUrl)
);

export const ensureLeadingSlashes = urlStr => (
  /^[^.]+:\/\//.test(urlStr) ? urlStr : `//${urlStr}`
);
