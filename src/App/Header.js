import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import ContactModal from '../ContactModal';

const Header = ({ title, openCreateModal }) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">{title}</a>
      <ul className="navbar-nav mr-auto">
        &nbsp;
      </ul>
      <form className="form-inline my-2 my-md-0">
        <button type="button" className="btn btn-primary" onClick={openCreateModal}>
            Create
        </button>
      </form>
    </nav>
  </header>
);

Header.propTypes = {
  title: string,
  openCreateModal: func,
};

const actions = { openCreateModal: ContactModal.openCreateModal };

export default connect(null, actions)(Header);