import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import dvsg_logo from './images/dvsg_logo.svg'

class Navigation extends Component {
  constructor(props) {
  super(props);
  this.state = {
    pageName: "",
  };

  this.openLinkedIn = this.openLinkedIn.bind(this);
}

componentDidMount() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}

openLinkedIn(pageName) {
    window.open('https://www.linkedin.com/in/seanmnartiff');
}

  render() {
    return (
      <div className="Navigation">
        <nav className="navbar" id="mainNav">
          <div className="navbar-brand">
            <li className="navbar-item" >
              <Link to="/">
                  <img src={dvsg_logo} alt="dvsg logo" width="150" height="50"/>
              </Link>
            </li>
            <div className="navbar-burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-start">
              <li className="navbar-item"><Link to="/blog">Blog</Link></li>
              <li className="navbar-item"><Link to="/mission">Mission</Link></li>
              <li className="navbar-item"><Link to="/resume">Resume</Link></li>
              <li className="navbar-item"><Link to="/services">Services</Link></li>
              <li className="navbar-item"><Link to="/contact">Contact</Link></li>
                <div className="navbar-item">
                  <div className="navbar-menu">
                      <a className="button is-small is-warning is-outlined">
                          <span className="icon">
                            <i className="fa fa-linkedin" onClick={this.openLinkedIn}></i>
                          </span>
                      </a>
                  </div>
                </div>
            </div>
            <div className="navbar-end">
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
