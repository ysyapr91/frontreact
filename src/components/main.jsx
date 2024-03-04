import 'assets/css/common.css';
import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

function Main() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }

export default Main;