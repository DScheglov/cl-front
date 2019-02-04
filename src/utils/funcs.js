export const isFunc = func => typeof func === 'function';
export const ensureFunc = (func, defFunc) => isFunc(func) && func || defFunc;

export const pipe = (value, ...funcs) => funcs.reduce(
  (a, f) => f(a), value
);

export const idX = x => x;

export const chain2 = (f, g) => (...args) => {
  const res = f(...args);
  if (res && typeof res.then === 'function') {
    return res.then(g);
  }
  return g(res);
};