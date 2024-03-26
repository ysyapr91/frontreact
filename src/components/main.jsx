import React from 'react';
import * as Layout from 'components/pages';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

import { useSelector, useDispatch } from 'react-redux';
import { setPage, setPageList } from 'reducers/module/viewReducer';

import 'assets/css/common.css';

function Main() {
  const dispatch = useDispatch();

  const init = () => {
    dispatch(setPageList('mainTab',
      [
        {page: "HOME", component: <Pages.Home />},
        {page: "TEST", component: <Tests.Test />},
        {page: "POPUP", component: <Tests.TestPopup />},
        {page: "MODAL1", component: <Tests.TestModal1 />},
        {page: "REQUEST", component: <Tests.TestRequest />},
        {page: "COUNT", component: <Tests.TestCount />},
      ]
    ))
  }

  init();

  return (
    <div className="container">
      <Layout.Header></Layout.Header>
      <Layout.Content></Layout.Content>
      <Layout.Footer></Layout.Footer>
    </div>
  );
}

export default Main;