import React from 'react';
import { Link } from 'react-router-dom';
import Test from 'components/tests/test';

function Welcome() {
  const title = 'Welcome';
  const pageNum = 0;

  return (
    <>
      <div>
        TEST
      </div>
      <Test></Test>
      <br/>

      <div>
        VIEW
      </div>
    </>
  );
}

export default Welcome; 