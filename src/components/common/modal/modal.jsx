import React from 'react';
import 'assets/css/modal.css';

const Modal = ({ children, isOpen, onClose }) => {
  const modalStyle = {
    display: "none"
  };

  if (!isOpen) {
    modalStyle.display = "none";
    return null;
  } else {
    modalStyle.display = "display";
  }

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-title">Modal Title</div>
        <div className="modal-content-text">{children}</div>
      </div>
    </div>
  );
};

export default Modal;