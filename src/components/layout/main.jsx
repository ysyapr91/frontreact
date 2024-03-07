import 'assets/css/common.css';

import React from 'react';

import Header from 'components/layout/header';
import Content from 'components/layout/content';
import Footer from 'components/layout/footer';

function Main() {
    return (
      <>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </>
    );
  }

export default Main;