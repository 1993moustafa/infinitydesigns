import React, { Component } from 'react';
import logo from './logo.svg';

import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Sticky from '../components/Sticky/Sticky';

import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
    	<div>
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
    );
  }
}

export default App;
