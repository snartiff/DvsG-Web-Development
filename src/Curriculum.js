import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import ca_logo from './images/ca.png'

class Curriculum extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
    return (
      <div className="Curriculum">
        <div id="alignCenter">
          <h1 className="title is-1">Software Engineer</h1>
          <h1 className="subtitle is-6">Curriculum Associates (Nov. 2016 - June 2017)</h1>
        </div><br />
        <p>Prior to my work at the MSBA, I worked as a Software Engineer at Curriculum Associates, a publishing and education technology company. While at Curriculum Associates,
        I contributed code to the Authoring platform, a content management system used to create online learning activities for students. I sharpened my front-end development skills using
        libraries such as jQuery and Vue.js. In addition to my coding, I worked with producers and product owners to make sure our features met users&#39 expectations.</p>
      </div>
    );
  }
}

export default Curriculum;
