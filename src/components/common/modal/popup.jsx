import React from 'react';
import 'assets/css/popup.css';

function Popup({ children, isOpen, setIsOpen }) {
  if (!isOpen) return null;

  let popupStyle = {}
  let popupContentStyle = {}
  if (isOpen) {
    //popupStyle = {right: '0%'}
    //popupContentStyle = {right: '0%'}
  }

  const closePopup = () => {
    setIsOpen(false);
  }

  return (
    <div className="popup" style={ popupStyle }>
      <div className="popup-content" style={ popupContentStyle }>
      <span className="close-button" onClick={() => closePopup()} >X</span>
        {children}
      </div>
    </div>
  );
};

export default Popup;