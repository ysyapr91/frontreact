import React from 'react';
import TestCounter from 'components/tests/testCounter';

function Welcome() {
  const title = 'Welcome';
  const pageNum = 0;

  return (
    <>
      <div>redux count </div>
      <TestCounter></TestCounter>
      <TestCounter></TestCounter>
    </>
  );
}

export default Welcome; 