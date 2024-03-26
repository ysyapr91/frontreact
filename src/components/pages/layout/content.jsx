import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
function Content() {
  const view = useSelector(state => state.view);

  const getComponent = () => {
    return view.page.main;
  };

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