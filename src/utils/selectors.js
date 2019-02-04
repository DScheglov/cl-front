import { compose } from 'redux';
import { createSelector } from 'reselect';
import { ensureFunc, idX } from './funcs';


const domainSelectorData = selector => ({
  _selector: ensureFunc(selector, idX),
});

const wrappedDomainSelector = self => (...args) => self._selector(...args);

const wrap = self => selector => createSelector(
  wrappedDomainSelector(self), selector
);

const set = self => selector => {
  self._selector = ensureFunc(selector, idX);
};

const attachTo = self => parent => {
  self._selector = createSelector(parent, self._selector);
};

const domainSelectorInterface = self => Object.assign(
  wrappedDomainSelector(self), {
    wrap: wrap(self),
    set: set(self),
    attachTo: attachTo(self),
  }
);

export const domainSelector = compose(domainSelectorInterface, domainSelectorData);

