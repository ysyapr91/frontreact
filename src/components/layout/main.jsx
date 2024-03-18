import 'assets/css/common.css';
import React from 'react';
import * as Layout from 'components/layout';

function Main() {
    return (
      <div className="container">
        <Layout.Header2></Layout.Header2>
        <Layout.Content2></Layout.Content2>
        <Layout.Footer></Layout.Footer>
      </div>
    );
  }

export default Main;