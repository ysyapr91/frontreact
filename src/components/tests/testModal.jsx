import React, { useState } from 'react';
import * as Common from 'components/common';
import * as Tests from 'components/tests';

const TestModal = () => {
  const [modalState, setModalState] = useState({
    test: false,
    testCounter: false
  });

  const toggleModal = (modalName) => {
    return;
    setModalState(prevState => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }));
  };

  return (
    <div>
      <button onClick={toggleModal('test')}>Open Modal</button>
      <Common.Modal isOpen={modalState.test.isOpen} onClose={toggleModal('test')}>
        <Tests.Test></Tests.Test>
      </Common.Modal>
      <br/><br/>
      <button onClick={toggleModal('testCounter')}>Open Modal</button>
      <Common.Modal isOpen={modalState.testCounter.isOpen} onClose={toggleModal('testCounter')}>
        <Tests.TestCounter></Tests.TestCounter>
      </Common.Modal>
    </div>
  );
};

export default TestModal;