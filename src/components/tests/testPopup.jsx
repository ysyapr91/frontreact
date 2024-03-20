import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Popup, PopupList } from 'components/common';
import * as Tests from 'components/tests';

const TestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [popList, setPopList] = useState({
    isOpen: false,
    idx: 0,
    list: [<Tests.TestReduxData />, <Tests.Test />, <Tests.TestRequest />, <Tests.TestCount />]
  });

  const togglePopList = () => {
    setPopList(prev => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  let onData = {
    count: 0
  }

  return (
    <div className="popup-container">
      <button onClick={togglePopup}>팝업 열기</button> 
      {isOpen && (
        <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
          Popup
        </Popup>
      )}
      <br/><br/>
      <button onClick={togglePopList}>리스트 팝업 열기</button> 
      {popList.isOpen && (
        <PopupList state={popList} set={setPopList} data={onData}/>
      )}
    </div>
  );
};

export default TestPopup;