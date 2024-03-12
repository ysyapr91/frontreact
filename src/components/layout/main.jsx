import 'assets/css/common.css';
import React from 'react';
import { Header, Content, Footer } from 'components/layout';
import Router from 'routers';

function Main() {
    return (
      <>
        <Header></Header>
        <Router>
          <Content></Content>
        </Router>
        <Footer></Footer>
      </>
    );
  }

export default Main;