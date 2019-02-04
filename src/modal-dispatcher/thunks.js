import { activate, deactivate, isActive } from './store';

const unserializableState = {};

const getModalState = modalId => {
  const modalState = unserializableState[modalId];
  if (modalState == null) return null;
  const { params, close, bindClose } = modalState;
  return { params, close, bindClose };
};

export const open = (modalId, params) => dispatch => new Promise(
  resolve => {
    unserializableState[modalId] = {
      params,
      close: result => dispatch(close(modalId, result)),
      bindClose: result => () => dispatch(close(modalId, result)),
      resolve,
    };
    dispatch(activate(modalId));
  }
);

export const close = (modalId, result) => dispatch => {
  dispatch(deactivate(modalId));
  const modalState = unserializableState[modalId];
  if (modalState) {
    modalState.resolve(result);
    unserializableState[modalId] = null;
  }
};

export const modalProps = (state, modalId) => ({
  ...getModalState(modalId),
  isActive: isActive(state, modalId),
});