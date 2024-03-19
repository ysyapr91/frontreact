import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { pushList } from 'reducers/module/modalReducer';

function Testsss() {
  const content = useSelector(state => state.content);
  //const dispatch = useDispatch();

  return (
    <>
      {content.tabIdx}
      <br/>
      {content.tabList[content.tabIdx].page}
    </>
  );
};

export default Testsss;