import Component from './ContactModal';
import * as Thunks from './thunks';
import { modalId } from './modal-id';
import reducers from './store';

export default { Component, ...Thunks, modalId, reducers };