import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import dvsg_logo from './images/dvsg_logo.svg'

class Navigation extends Component {
  constructor(props) {
  super(props);
  this.state = {
    pageName: "",
  };

  this.openLinkedIn = this.openLinkedIn.bind(this);
  this.openFacebook = this.openFacebook.bind(this);
}

openLinkedIn(pageName) {
    window.open('https://www.linkedin.com');
}

openFacebook(pageName) {
    window.open('https://www.facebook.com');
}

  render() {
    return (
      <div className="Navigation">
        <nav className="navbar">
          <div className="navbar-brand">
            <li className="navbar-item" >
              <Link to="/">
                  <img src={dvsg_logo} alt="dvsg logo" width="150" height="50"/>
              </Link>
            </li>
          </div>
          <li className="navbar-item"><Link to="/blog">Blog</Link></li>
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/process">Process</Link></li>
          <li className="navbar-item"><Link to="/services">Services</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
          <div className="navbar-item">
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="button is-small is-warning is-outlined">
                    <span className="icon">
                      <i className="fa fa-linkedin" onClick={this.openLinkedIn}></i>
                    </span>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="navbar-menu">
              <div className="navbar-end">
                <a className="button is-small is-info is-outlined">
                    <span className="icon">
                      <i className="fa fa-facebook" onClick={this.openFacebook}></i>
                    </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
