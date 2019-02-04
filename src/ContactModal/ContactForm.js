import React from 'react';
import { string, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import loading from '../loading';
import { getContactForm, update } from './store';
import * as Thunks from './thunks';


const prevent = event => {
  event.preventDefault();
};

const ContactForm = ({
  id, firstName, lastName, phone, address,
  updateFirstName, updateLastName, updatePhone, updateAddress,
  isLoading, close, patch, create
}) => (
  <React.Fragment>
    <div className="modal-body">
      <form style={{ width: 450 }} onSubmit={prevent}>
        <div className="form-group">
          <label htmlFor="fldFirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fldFirstName"
            placeholder="First Name"
            value={firstName}
            onChange={updateFirstName}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fldLastName">Last Name</label>
          <input
            type="phone"
            className="form-control"
            id="fldLastName"
            placeholder="Last Name"
            value={lastName}
            onChange={updateLastName}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fldPhone">Phone</label>
          <input
            type="phone"
            className="form-control"
            id="fldPhone"
            placeholder="+380 50 123 21 12"
            value={phone}
            onChange={updatePhone}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fldAddress">Address</label>
          <textarea
            className="form-control"
            id="fldAddress"
            rows="3"
            value={address}
            onChange={updateAddress}
            disabled={isLoading}
          ></textarea>
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
        onClick={close}
        disabled={isLoading}
      >Close</button>
      <button
        type="button"
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(
          id != null
            ? () => patch().then(close) 
            : () => create().then(() => close(true))
        )}
      >
        {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
        Save changes
      </button>
    </div>
  </React.Fragment>
);

if (process.env.NODE_ENV === 'production') {
  ContactForm.propTypes = {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    updateFirstName: func,
    updateLastName: func,
    updatePhone: func,
    updateAddress: func,
    isLoading: bool,
    close: func,
    create: func,
    patch: func,
  };
}

const state2props = state => ({
  ...getContactForm(state),
  isLoading: loading.isLoading(state, 'CONTACT::PROCESSING'),
});

const actions = {
  updateFirstName: ({ target }) => update({ firstName: target.value }),
  updateLastName: ({ target }) => update({ lastName: target.value }),
  updatePhone: ({ target }) => update({ phone: target.value }),
  updateAddress: ({ target }) => update({ address: target.value }),
  create: Thunks.create,
  patch: Thunks.patch,
};

export default connect(state2props, actions)(ContactForm);
