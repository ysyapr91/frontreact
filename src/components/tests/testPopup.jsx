import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Popup } from 'components/common';
import * as Tests from 'components/tests';

const TestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-container">
      <button onClick={togglePopup}>팝업 열기</button> 
      {isOpen && (
        <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
          <Tests.Test></Tests.Test>
        </Popup>
      )}
    </div>
  );
};

export default TestPopup;