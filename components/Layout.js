import Head from 'next/head';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Sticky from './Sticky';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Navbar />
        <div className="py-5">
          <div className="container mt-5 pt-5">
            <div className="row">
              <Sidebar />
              <Sticky />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;