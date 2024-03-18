import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setData, setTabIdx } from 'reducers/module/contentReducer';

function Header() {
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();
  const tabbarRef = useRef(null);
  const tabWidth = 100;

  const items = content.tabList;
  const [activetab, setActiveTab] = useState({...items[content.tabIdx], idx: content.tabIdx});
  let item = items[content.tabIdx];

  const switchTab = (page) => {
    let idx = items.findIndex((e) => { return e.page == page; })
    setActiveTab({
      ...items[idx],
      idx: idx
    })
    dispatch(setTabIdx(idx))
  };

  useEffect(() => {
    if(tabbarRef.current) {
      tabbarRef.current.style.setProperty('--tabwidth', `${tabWidth}px`);
    }
  }, [tabbarRef]);

  return (
    <>
      <div className="header">
        <div className="tabs" ref={tabbarRef}>
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
      </div>
    </>
  );
}

export default Header;