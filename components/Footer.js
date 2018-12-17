import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
  render() {
    return (
  		<div className="container">
  			<div className="row">
  				<div className="col-12">
  					<div className="text-center copyright">
							&copy; {(new Date().getFullYear())} infinitydesigns.nl
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }
}


export default Footer;
