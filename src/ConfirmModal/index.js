import React from 'react';
import { func, bool, string, node, object } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Loading from '../loading';
import ModalDispatcher from '../modal-dispatcher';
import { modalId } from './modal-id';
import { content, overlay } from '../modal-common/styles';
import { chain2 } from '../utils/funcs';

const ConfirmModal = ({
  isActive, isLoading, bindClose, title, children, onConfirm,
  okBtnText = 'Ok',
  cancelBtnText = 'Cancel',
  params
}) => {
  const confirmHook = params && params.onConfirm || onConfirm;
  return isActive && (
    <Modal
      isOpen
      onRequestClose={close}
      shouldCloseOnOverlayClick
      style={{ content, overlay }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={bindClose(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {params.message || children}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={bindClose(false)}
            disabled={isLoading}
          >{cancelBtnText}</button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={isLoading}
            onClick={
              typeof confirmHook === 'function'
                ? chain2(confirmHook, bindClose(true))
                : bindClose(true)
            }
          >
            {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
            {okBtnText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ConfirmModal.propTypes = {
    isActive: bool,
    isLoading: bool,
    title: string,
    children: node,
    onConfirm: func,
    close: func,
    bindClose: func,
    loadingId: string,
    okBtnText: string,
    cancelBtnText: string,
    params: object,
  };
}

const state2Props = (state, props) => ({
  ...ModalDispatcher.modalProps(
    state, props.modalId || modalId
  ),
  isLoading: Boolean(props.loadingId) && Loading.isLoading(state, props.loadingId),
});

export default connect(state2Props)(ConfirmModal);
