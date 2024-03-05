import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"; 

import 'assets/css/common.css';

import Welcome from 'components/view/welcome.jsx';

function Content() {
  return (
    <>
      <div class="content">
        <BrowserRouter>      
          <Routes>
            <Route path="/" element = {<Welcome/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Content;