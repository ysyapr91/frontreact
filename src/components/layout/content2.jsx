/**
 * content2.jsx
 * useState, Suspense 사용
 * Tab부분 데이터화 
 */

import React, { useState, Suspense, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'assets/css/common.css';
import 'assets/css/slideTab.css';

function Content() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();
  const tabbarRef = useRef(null);
  const tabWidth = 100;
  const items = content.tabList;

  const getComponent = () => {
    return items[content.tabIdx].component;
  };

  useEffect(() => {
    if(tabbarRef.current) {
      tabbarRef.current.style.setProperty('--tabwidth', `${tabWidth}px`);
    }
  }, [tabbarRef]);

  return (
    <>
      <div className="content">
        <div className="tabcontainer">
          <Suspense fallback={<div>Loading...</div>}>
            {getComponent()}
          </Suspense>
        </div>
      </div> 
    </>
  );
}

export default Content;