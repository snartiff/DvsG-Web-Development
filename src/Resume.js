import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
    return (
      <div className="Msba">
        <div id="alignCenter">
          <h1 className="title is-2">Sean Nartiff</h1>
          <h2 className="subtitle is-6">Web Developer and Designer</h2>
        </div><br />
      <div id="alignCenter">
          <h1 className="title is-4">Web Application Developer</h1>
          <h6 className="subtitle is-6">MSBA (July 2017 - present)</h6>
        </div><br />
      <p>I currently work full-time as a Web Application Developer for the Massachusetts School Building Authority.
        The MSBA is a government organization that provides funding to Massachusetts'
        public schools for various construction projects. At the MSBA, several web
        applications are used throughout different stages of a project's lifecycle.
        I work on the front-end and back-end code of these applications using jQuery, C#, and .NET.</p><br />
        <div id="alignCenter">
          <h1 className="title is-4">Software Engineer</h1>
          <h1 className="subtitle is-6">Curriculum Associates (Nov. 2016 - June 2017)</h1>
        </div><br />
        <p>Prior to my work at the MSBA, I worked as a Software Engineer at Curriculum Associates, a publishing and education technology company. While at Curriculum Associates,
        I contributed code to the Authoring platform, a content management system used to create online learning activities for students. I sharpened my front-end development skills using
        libraries such as jQuery and Vue.js. In addition to my coding, I worked with producers and product owners to verify that our features were made according to spec.</p><br />
      <div id="alignCenter">
        <h1 className="title is-4">Ruby on Rails Apprentice</h1>
        <h1 className="subtitle is-6">Launch Academy (Aug. 2016 - Oct. 2017)</h1>
      </div><br />
    <p>This marks the beginning of my journey into web development. This Boston-based coding bootcamp taught
        me the fundamentals of object-oriented programming and full-stack web development. I learned my first language, Ruby, and was introduced to React,
        one of the most popular front-end frameworks used today. By the end of Launch Academy, I was able to build my very first web application from scratch.</p>
      <div id="panels">
        <div className="panel">
          <div className="panel-heading">
            <p className="resumePanel">Coding Skills</p>
          </div>
          <div className="panel-block">
            <ul>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Ruby on Rails</li>
              <li>WordPress</li>
            </ul>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <p className="resumePanel">Design Skills</p>
          </div>
          <div className="panel-block">
            <ul>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Photoshop</li>
            </ul>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <p className="resumePanel">Education</p>
          </div>
          <div className="panel-block">
            <ul>
              <li>Launch Academy: Full-Stack Web-Development</li>
              <li>Plymouth State University: M.Ed, Language Education</li>
              <li>Temple University: BA, Advertising</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Resume;
