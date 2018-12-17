import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-12 col-lg-3 order-2 order-lg-1 order-2">
				<div className="card bg-cerulean rounded-0 border-0 shadow">
				  <div className="py-4 d-flex justify-content-center">
				    <img className="card-img rounded-circle" src="/static/media/moustafa-omar.jpg" width="200" height="200" />
				  </div>
				  <div className="card-body">
				    <h5 className="card-title text-center">Moustafa Omar</h5>
				    <ul className="list-inline m-0 py-4 text-center social-media">
				      <li className="list-inline-item px-2">
				        <a className="ripple" href="#">
				          <img className="icon" src="/static/media/linkedin.svg" alt="linkedin"/>
				        </a>
				      </li>
				      <li className="list-inline-item px-2">
				        <a className="ripple" href="#">
				         <img className="icon" src="/static/media/gmail.svg" alt="gmail"/>
				        </a>
				      </li>
				    </ul>
				  </div>
				  <div className="bg-mineshaft text-center p-4">
				    <button type="button" className="btn ripple btn-tundora btn-lg">
				      Download Resume
				    </button>
				  </div>
				</div>
      </div>
    );
  }
}

export default Sidebar;
