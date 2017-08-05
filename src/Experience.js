import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom';
import {getActiveTab} from './Helpers.js';
import Launch from './Launch.js';
import Curriculum from './Curriculum.js';
import Msba from './Msba.js';

class Experience extends Component {
  constructor(props) {
  super(props);
  this.state = {
    tabName: "MSBA"
  };
  this.handleComponentChange = this.handleComponentChange.bind(this);
}

handleComponentChange(e) {
  let activeTab = getActiveTab(e);
  this.setState({
    tabName: activeTab
  })
}

  render() {
    let jobPage = null;

    jobPage = this.props.location.pathname === "/about/experience" ? <Msba /> : null;

    return (
      <div className="Experience"><br />
      <h1 id="missionTitle" className="title is-1">What is Sean's Background?</h1>
      <div className="tabs is-small is-toggle is-centered is-fullwidth">
        <ul>
          <li onClick={this.handleComponentChange} className={this.state.tabName === 'MSBA' ? 'is-active': null}>
            <Link to="/about/experience">
              <span>
                <i id="icons" className="fa fa-building"></i>
              </span>
              <span>MSBA</span>
            </Link>
          </li>
          <li onClick={this.handleComponentChange} className={this.state.tabName === 'Curriculum Associates' ? 'is-active': null}>
            <Link to="/about/experience/ca">
              <span>
                <i id="icons" className="fa fa-book"></i>
              </span>
              <span>Curriculum Associates</span>
            </Link>
          </li>
          <li onClick={this.handleComponentChange} className={this.state.tabName === 'Launch Academy' ? 'is-active': null}>
            <Link to="/about/experience/launch_academy">
              <span>
                <i id="icons" className="fa fa-rocket"></i>
              </span>
              <span>Launch Academy</span>
            </Link>
          </li>
        </ul>
      </div>
      {jobPage}
      </div>
    );
  }
}

export default Experience;
