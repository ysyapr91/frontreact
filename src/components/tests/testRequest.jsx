import React, { useState } from 'react';
import { request } from 'utils';


const App = () => {
  const [modalState, setModalState] = useState({
    
  });

  console.log(request);

  const call = (url) => {
    console.log(url)
  };

  return (
    <>
      <div>Request Test</div>
      <input type='text'></input>
      <button onClick={() => call('')}>Open Test2</button>
    </>
  );
};

export default App;