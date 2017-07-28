import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import launch_logo from './images/launch.jpg'

class Launch extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
    return (
      <div className="Launch"><br />
        <div id="experienceLogos">
          <img id="launch_logo" src={launch_logo} alt="launch academy logo" height="150"/><br/>
        </div>
        <br/><h1 id="experienceHeaders" className="title">Ruby on Rails Apprentice</h1>
        <p>Ah, this marks the beginning of my journey into web development. This Boston-based coding bootcamp taught
        me the fundamentals of programming and full-stack web development. I learned my first language, Ruby, and was introduced to React,
        one of the most popular front-end frameworks used today. By the end of Launch Academy, I was able to build my very first web application, Careerleon, from scratch.</p>
      </div>
    );
  }
}

export default Launch;
