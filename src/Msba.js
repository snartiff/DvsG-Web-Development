import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import msba_logo from './images/msba_logo_new.png'

class Msba extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
    return (
      <div className="Msba">
        <div id="alignCenter">
          <h1 className="title is-2">Resume</h1>
        </div><br />
        <div id="alignCenter">
          <h1 className="title is-4">Web Application Developer</h1>
          <h1 className="subtitle is-6">MSBA (July 2017 - present)</h1>
        </div><br />
        <p>I currently work full-time as a Web Application Developer for the MSBA.
        The MSBA is a non-profit organization that provides funding to Massachusetts
        public schools for various construction projects. At the MSBA, several web
        applications are used throughout different stages of a project's lifecycle.
        I work on the front-end and back-end code of these applications with our small and
        dedicated team.</p><br />
        <div id="alignCenter">
          <h1 className="title is-4">Software Engineer</h1>
          <h1 className="subtitle is-6">Curriculum Associates (Nov. 2016 - June 2017)</h1>
        </div><br />
        <p>Prior to my work at the MSBA, I worked as a Software Engineer at Curriculum Associates, a publishing and education technology company. While at Curriculum Associates,
        I contributed code to the Authoring platform, a content management system used to create online learning activities for students. I sharpened my front-end development skills using
        libraries such as jQuery and Vue.js. In addition to my coding, I worked with producers and product owners to make sure our features met users' expectations.</p><br />
      <div id="alignCenter">
        <h1 className="title is-4">Ruby on Rails Apprentice</h1>
        <h1 className="subtitle is-6">Launch Academy (Aug. 2016 - Oct. 2017)</h1>
      </div><br />
        <p>Ah, this marks the beginning of my journey into web development. This Boston-based coding bootcamp taught
        me the fundamentals of programming and full-stack web development. I learned my first language, Ruby, and was introduced to React,
        one of the most popular front-end frameworks used today. By the end of Launch Academy, I was able to build my very first web application, Careerleon, from scratch.</p>
      </div>
    );
  }
}

export default Msba;
