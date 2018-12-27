import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Jumbotron} from 'reactstrap';
import styled from 'styled-components';
import ReactWOW from 'react-wow';
import Accordion from './Accordion';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class JumbotronMineshaft extends Component {
  render() {
    return (
        <div className="col-12 col-lg-8 order-3 order-lg-2 order-1">
          <Jumbotron className="mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block">
            <h2 className="display-4">About me</h2>
            <p className="lead">
              Hello! I’m Moustafa Omar a web Developer specializing in front end development 
              Experienced with all stages of the development for dynamic web projects.
            </p>
            <div className="addthis_inline_share_toolbox"></div>
            <hr className="my-2" />
            <div className="row">
                <div className="col-12 col-lg-6">
                  <h3>Personal information</h3>
                    <dl className="row">
                      <dt className="col-auto">Name</dt>
                      <dd className="col-sm-10">Moustafa</dd>
                      <dt className="col-auto">Last name</dt>
                      <dd className="col-sm-10">Omar</dd>
                      <dt className="col-auto">Address</dt>
                      <dd className="col-sm-10">Schiedam, Netherlands</dd>
                      <dt className="col-auto">E-Mail</dt>
                      <dd className="col-sm-10">moustafa.omar@infinitydesigns.nl</dd>
                      <dt className="col-auto">Phone</dt>
                      <dd className="col-sm-10">+31 6 43 91 54 52</dd>
                  </dl>
                </div>
                <div className="col-12 col-lg-6">
                  <h3>Languages</h3>
                    <dl className="row">
                      <dt className="col-auto">Dutch</dt>
                      <dd className="col-sm-10">
                        <div className="bullet-progress">
                          <span className="progress-bar ">
                            <ReactWOW animation='fadeIn'>
                              <span className="bullet fill" data-wow-offset="1" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="2" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="3" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="4" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="5" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="6" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="7" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="8" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="9" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="10" data-wow-iteration="1"></span>
                            </ReactWOW>
                          </span>
                        </div>
                      </dd>
                      <dt className="col-auto">English</dt>
                      <dd className="col-sm-10">
                        <div className="bullet-progress">
                          <span className="progress-bar">
                            <ReactWOW animation='fadeIn'>
                              <span className="bullet fill" data-wow-offset="1" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="2" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="3" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="4" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="5" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="6" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="7" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="8" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="9" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="10" data-wow-iteration="1"></span>
                            </ReactWOW>
                          </span>
                        </div>
                      </dd>
                      <dt className="col-auto">Arabic</dt>
                      <dd className="col-sm-10">
                        <div className="bullet-progress">
                          <span className="progress-bar">
                            <ReactWOW animation='fadeIn'>
                              <span className="bullet fill" data-wow-offset="1" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="2" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="3" data-wow-iteration="1"></span>
                              <span className="bullet fill" data-wow-offset="4" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="5" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="6" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="7" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="8" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="9" data-wow-iteration="1"></span>
                              <span className="bullet" data-wow-offset="10" data-wow-iteration="1"></span>
                            </ReactWOW>
                          </span>
                        </div>
                      </dd>
                  </dl>
                </div>
              </div>
          </Jumbotron>

          <Element name="work-experience" className="element">
            <Jumbotron className="mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block">
              <h2 className="display-4 mb-4">Work Experience</h2>
              <div className="education">
                <div className="education-box">
                  <time className="education-date" dateTime="2014-01T2016-03">
                  <span>Jan <strong className="text-upper">2014</strong> - Mar <strong>2016</strong></span>
                  </time>
                  <div className="education-logo">
                     <img src="/static/media/capptions.svg" alt="capptions" />
                  </div>
                  <span className="education-company">Front-end developers</span>
                  <p>Your brand is the core of your marketing,
                     the central theme around your products and services.
                     Your brand is not your Logo or your Company Name
                  </p>
                </div>
                <div className="education-box">
                  <time className="education-date" dateTime="2014-01T2016-03">
                    <span>Jan <strong className="text-upper">2014</strong> - Mar <strong>2016</strong></span>
                  </time>
                  <div className="education-logo">
                     <img src="/static/media/tappan.svg" alt="Tappan" />
                  </div>
                  <span className="education-company">Front-end developers</span>
                  <p>
                     Your brand is the core of your marketing, the central theme around your products and services.
                  </p>
                </div>
                <div className="education-box">
                  <time className="education-date" dateTime="2014-01T2016-03">
                    <span>Jan <strong className="text-upper">2014</strong> - Mar <strong>2016</strong></span>
                  </time>
                  <div className="education-logo">
                     <img src="/static/media/yorcom.png" alt="Yorcom" />
                  </div>
                  <span className="education-company">Front-end developers</span>
                  <p>Your brand is the core of your marketing, the central theme around your products and services.</p>
                </div>
              </div>
            </Jumbotron>
          </Element>

          <Element name="portfolio" className="element">
            <Jumbotron className="mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block">
              <h2 className="display-4">Hello, world!</h2>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
          </Element>

          <Element name="references" className="element">
            <Jumbotron className="mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block">
              <h2 className="display-4">Hello, world!</h2>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
          </Element>

          <Element name="contact" className="element">
            <Jumbotron className="mt-4 mt-lg-0 jumbotron bg-mineshaft rounded-0 box-shadow-block">
              <h2 className="display-4">Hello, world!</h2>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
            </Jumbotron>
          </Element>

        </div>
    );
  }
}



export default JumbotronMineshaft;
