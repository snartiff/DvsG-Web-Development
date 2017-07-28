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
        <div id="experienceLogos">
          <img id="msba_logo" src={msba_logo} alt="msba logo"/><br/>
        </div>
        <br/><h1 id="experienceHeaders" className="title">Web Application Developer</h1>
        <p>I currently work full-time as a Web Application Developer for the MSBA.
        The MSBA is a non-profit organization that provides funding to Massachusetts
        public schools for various construction projects. At the MSBA, several web
        applications are used throughout different stages of a project&#39;s lifecycle.
        I work on the front-end and back-end code of these applications with our small and
        dedicated team.</p>
      </div>
    );
  }
}

export default Msba;
