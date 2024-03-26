import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  const onPage = (e) => {
    let v = content.data.pageName;
  }

  const onData = (e) => {
    let k = e.target.getAttribute('name');
    let v = e.target.value;
  }

  let contentPage = content.page;

  return (
    <>
      <div className="header">
        Header
      </div>
    </>
  );
}

export default Header;