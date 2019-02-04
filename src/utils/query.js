const _flat = (path, obj, flatted) => Object.keys(obj).reduce(
  (f, p) => {
    let v = obj[p];
    if (v === undefined) return flatted;
    if (v === null) v = '';
    const ep = encodeURIComponent(p);
    const np = path ? `${path}[${ep}]` : ep;
    const theType = Array.isArray(v) ? 'array' : typeof v;
    if (['function', 'array'].includes(theType)) v = '';
    if (theType === 'object') {
      return _flat(np, v, f);
    }
    f.push(`${np}=${encodeURIComponent(v)}`);
    return f;
  }, flatted
);

const flat = obj => _flat('', obj, []);

const stringify = query => {
  const queryString = flat(query).join('&');
  return queryString ? `?${queryString}` : '';
};

export const buildQuery = query => (
  query != null ? stringify(query) : ''
);
