import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { setPage } from 'reducers/module/contentReducer';

import * as Tests from 'components/tests';

function Testsss() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch(); 

  const goPage = (page) => {
    //dispatch(setPage(<Tests.TestCounter></Tests.TestCounter>));
  };

  return (
    <>
      {content.tabIdx}
      <br/>
      {content.tabList[content.tabIdx].page}
      <br/>
      <button onclick={goPage}>GO</button>
    </>
  );
};

export default Testsss;