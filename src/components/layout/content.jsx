import React from 'react';
import 'assets/css/common.css';

import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Content() {
  const content = useSelector(state => state.content);

  //const active = "components/pages/home";
  const active = 'components/tests/test';

  return (
    <>
      <div class="content">
        <Link to="components/tests/test">test</Link>
        
        

        <Pages.Home></Pages.Home>

        <br/><br/>
        <Tests.TestReduxData></Tests.TestReduxData>
      </div>
    </>
  );
}

export default Content;