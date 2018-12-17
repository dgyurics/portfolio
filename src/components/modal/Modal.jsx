import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends Component {
  handleClose = (event) => {
    event.preventDefault();
    const { onClose } = this.props;
    if (event.target === event.currentTarget && onClose) {
      onClose();
    }
  }

  render() {
    const { children, toggle } = this.props;
    const modalVisible = toggle ? 'modal__container modal__container--visible'
      : 'modal__container';
    return (
      <div onClick={this.handleClose} onKeyDown={this.handleClose} className={modalVisible}>
        <div className="modal">
          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggle: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;