import React, { useState, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'assets/css/common.css';
import 'assets/css/slideTab.css';
import * as Common from 'components/common';
import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

function Content() {
  const content = useSelector(state => state.content);
  const tabWidth = 100;
  const items = [
    {page: "HOME", component: <Pages.Home />},
    {page: "1", component: <Tests.TestCount />},
  ];
  const [activetab, setActiveTab] = useState({...items[0], idx: 0});

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const getComponent = () => {
    let item = items.some((obj) => {
      return obj.page === activetab.page
    })
    return item.component;
  };

  return (
    <>
      <div className="content">
        <div className="tabs">
          {items.map((tab, index) => (
            <div
              key={index}
              className={`tabitem ${tab.page === activetab.page ? 'active' : ''}`}
              onClick={() => switchTab(tab.page)}
            >
              {tab.page}
            </div>
          ))}
          <div
            className="slider"
            style={{ transform: `translateX(${activetab.idx * tabWidth}px)` }}
          ></div>
        </div>
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