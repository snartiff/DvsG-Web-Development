import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom';
import Mission from './Mission.js';
import {getActiveTab} from './Helpers.js';

class About extends Component {
  constructor(props) {
  super(props);
  this.state = {
    tabName: "Mission"
  };
  this.handleTabChange = this.handleTabChange.bind(this);
}

handleTabChange(e){
  let activeTab = getActiveTab(e);
  this.setState({
    tabName: activeTab
  })
}

  render() {

    let missionPage = null;

    missionPage = this.props.location.pathname === "/mission" ? <Mission /> : null;

    return (
      <div className="About">
        <div className="tabs is-large is-centered is-fullwidth">
          <ul>
            <li onClick={this.handleTabChange} className={this.state.tabName === 'Mission' ? 'is-active': null}><Link to="/mission">Mission</Link></li>
            <li onClick={this.handleTabChange} className={this.state.tabName === 'Experience' ? 'is-active': null}><Link to="/about/experience">Experience</Link></li>
          </ul>
        </div>
        {missionPage}
      </div>
    );
  }
}

export default About;
