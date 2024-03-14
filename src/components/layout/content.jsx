import React from 'react';
import 'assets/css/common.css';

import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

import { useSelector, useDispatch } from 'react-redux';

function Content() {
  const content = useSelector(state => state.content);

  const CustomTag = 'h3';
  content.page = Pages.Home;

  return (
    <>
      <div className="content">
        <Pages.Home></Pages.Home>
        <br/>
        <CustomTag>CustomTag</CustomTag>
        <br/>
        <Common.CustomComponent is={content.page}></Common.CustomComponent>
        <br/><br/>
        <Tests.TestModal></Tests.TestModal>
        <Tests.TestModal2></Tests.TestModal2>
        
        <br/><br/>
        <Tests.TestReduxData></Tests.TestReduxData>
      </div> 
    </>
  );
}

export default Content;