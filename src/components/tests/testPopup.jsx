import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pushList } from 'reducers/module/modalReducer';

const TestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <button onClick={togglePopup}>팝업 열기</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>팝업 내용</h2>
            <p>팝업 내용을 입력하세요.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPopup;