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
      <div class="content">
        <Pages.Home></Pages.Home>
        <br/>
        <CustomTag>CustomTag</CustomTag>
        <br/>
        <Common.CustomComponent is={content.page}></Common.CustomComponent>
        <br/><br/>
        <Common.Modal></Common.Modal>
        <Tests.TestModal></Tests.TestModal>
        
        <br/><br/>
        <Tests.TestReduxData></Tests.TestReduxData>
      </div> 
    </>
  );
}

export default Content;