import React, { useRef } from 'react';
import 'assets/css/popup.css';

function Popup({ children, state, set, data }) {

  let popupStyle = {}
  let popupContentStyle = {}
  if (state.isOpen) {
    //popupStyle = {right: '0%'}
    //popupContentStyle = {right: '0%'}
  }

  const closePopup = () => {
    set(p => ({
      ...p,
      isOpen: !p.isOpen
    }));
  }

  const prevPage = () => {
    set(p => ({
      ...p,
      idx: p.idx--
    }));
  }

  const nextPage = () => {
    set(p => ({
      ...p,
      idx: p.idx++
    }));
  }

  return (
    <div className="popup" style={ popupStyle }>
      <div className="popup-content" style={ popupContentStyle }>
        <div className="popup-header">
          <button onClick={prevPage}>prev</button> {state.idx} <button onClick={nextPage}>next</button>
          <span className="close-button" onClick={() => closePopup()} >X</span>
        </div>
        <div className="popup-content">
        {state.list[state.idx]}
        </div>
      </div>
    </div>
  );
};

export default Popup;