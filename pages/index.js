import Head from 'next/head';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Jumbotron from '../components/Jumbotron';
import Sticky from '../components/Sticky';
import Footer from '../components/Footer';

export default () => (
  <div>
    <Header />
    <Navbar />
    <div className="py-5">
      <div className="container mt-5 pt-5">
        <div className="row">
          <Sidebar />
          <Jumbotron />
          <Sticky />
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

