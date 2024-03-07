import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  return (   
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/tests/:testId"element={<Tests/>}/>
    </Routes>
  )
}

export default Router;