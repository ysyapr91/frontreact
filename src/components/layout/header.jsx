import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setPage, setData} from 'reducers/module/contentReducer';

function Header() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  const onPage = (e) => {
    let v = content.data.pageName;
    dispatch(setPage(v));
  }

  const onData = (e) => {
    let k = e.target.getAttribute('name');
    let v = e.target.value;
    dispatch(setData({[k]: v}));
  }

  let contentPage = content.page;

  return (
    <>
      <div class="header">
        Header
        <br/>
        [{content.data.pageName}]
        <br/>
        <input type="text" name="pageName" onChange={onData}></input>
        <button onClick={onPage}>change</button>
        <br/>
      </div>
    </>
  );
}

export default Header;