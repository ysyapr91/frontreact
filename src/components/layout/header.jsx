import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setPage } from 'reducers/module/contentReducer';

function Header() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  const onPage = (e) => {
    let v = e.target.value;
    dispatch(setPage(v));
  }

  return (
    <>
      <div class="header">
        Header
        <br/>
        <input type="text" value={content.page} onChange={onPage}></input>
        <br/>
      </div>
    </>
  );
}

export default Header;