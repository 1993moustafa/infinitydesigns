import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { UncontrolledTooltip } from 'reactstrap';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Sticky extends Component {
  render() {
    return (
      <div className="col-12 col-lg-1 order-1 order-lg-3 nav-sticky">
        <ul className="list-unstyled text-center" id="mainNav">
          <li className="py-4 py-lg-0 pb-0 pb-lg-4 mx-3 mx-lg-0">
            <a href="#home" className="ripple">
              <img className="rounded-circle" src="/static/media/moustafa-omar.jpg" width="50" height="50" />
            </a>
          </li>
          <li className="py-4 mx-3 mx-lg-0">
            <Link id="Experience" activeClass="active" className="work-experience" to="work-experience" spy={true} smooth={true} duration={500}>
              <img className="ripple" src="/static/media/briefcase.svg" width="40" height="40" />
              <UncontrolledTooltip placement="right" target="Experience">
                Experience
            </UncontrolledTooltip>
            </Link>
          </li>
          <li className="py-4 mx-3 mx-lg-0">
            <Link id="Portfolio" activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} >
              <img src="/static/media/pencil-case.svg" width="40" height="40" />
              <UncontrolledTooltip placement="right" target="Portfolio">
                Portfolio
            </UncontrolledTooltip>
            </Link>
          </li>
          <li className="py-4 mx-3 mx-lg-0">
            <Link id="References" activeClass="active" className="references" to="references" spy={true} smooth={true} duration={500} >
              <img src="/static/media/quotation.svg" width="40" height="40" />
              <UncontrolledTooltip placement="right" target="References">
                References
            </UncontrolledTooltip>
            </Link>
          </li>
          <li className="py-4 mx-3 mx-lg-0">
            <Link id="Contact" activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} >
              <img src="/static/media/letters.svg" width="40" height="40" />
              <UncontrolledTooltip placement="right" target="Contact">
                Contact
            </UncontrolledTooltip>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sticky;
