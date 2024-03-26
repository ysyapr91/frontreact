import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from 'reducers/module/viewReducer';

function Header() {
  const view = useSelector(state => state.view);
  const dispatch = useDispatch();
  const tabbarRef = useRef(null);
  const tabWidth = 100;

  const items = view.pageList.mainTab;
  const [tabIdx, setTabIdx] = useState(0);

  const switchTab = (idx) => {
    setTabIdx({idx});
    dispatch(setPage('main', items[idx].component));
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
            {items.map((tab, idx) => (
              <div
                key={idx}
                className={`tabitem ${idx === tabIdx ? 'active' : ''}`}
                onClick={() => switchTab(idx)}
              >
                {tab.page}
              </div>
            ))}
            <div
              className="slider"
              style={{ transform: `translateX(${tabIdx * tabWidth}px)` }}
            ></div>
          </div>
      </div>
    </>
  );
}

export default Header;