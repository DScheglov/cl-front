import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import ModalDispatcher from '../modal-dispatcher';
import { modalId } from './modal-id';
import { content, overlay } from '../modal-common/styles';
import ContactForm from './ContactForm';


const ContactModal = ({ isActive, close }) => isActive && (
  <Modal
    className=""
    isOpen
    onRequestClose={close}
    shouldCloseOnOverlayClick
    style={{ content, overlay }}
  >
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Contact</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <ContactForm close={close} />
    </div>
  </Modal>
);

if (process.env.NODE_ENV !== 'production') {
  ContactModal.propTypes = {
    close: func,
    bindClose: func,
  };
}

const state2Props = (state, props) => ModalDispatcher.modalProps(
  state, props.modalId || modalId
);

export default connect(state2Props)(ContactModal);
