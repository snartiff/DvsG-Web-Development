import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom';
import './font-awesome/css/font-awesome.min.css';
import Smallproject from './Smallproject.js';
import {getActiveTab} from './Helpers.js';

class Services extends Component {
  constructor(props) {
  super(props);
  this.state = {
    tabName: null
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
    return (
      <div className="Services">
        <h1 id="experienceHeaders" className="title is-2">Services</h1><br />
        <table id="servicesTable">
          <thead id="tableHeader" className="is-black">
            <tr>
              <th>Service</th>
              <th>Hourly Rate</th>
              <th>Hours Billed</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td><Link className="servicesLink" to="/small_project">Web Development & Design - Small Project</Link></td>
                <td>$40/hr</td>
                <td>40 hours</td>
                <td>$1600</td>
              </tr>
            <tr>
              <td><Link className="servicesLink" to="/medium_project">Web Development & Design - Medium Project</Link></td>
              <td>$40/hr</td>
              <td>80 hours</td>
              <td>$3200</td>
            </tr>
            <tr>
              <td><Link className="servicesLink" to="/large_project">Web Development & Design - Large Project</Link></td>
              <td>$40/hr</td>
              <td>120 hours+</td>
              <td>$4800+</td>
            </tr>
            <tr>
              <td><Link className="servicesLink" to="/web_domain_setup">Web Domain Setup</Link></td>
              <td>$40/hr</td>
              <td>10 hours</td>
              <td>$400</td>
            </tr>
            <tr>
              <td><Link className="servicesLink" to="/web_domain_setup">Logo Design - 3 concepts</Link></td>
              <td>$40/hr</td>
              <td>20 hours</td>
              <td>$800</td>
            </tr>
          </tbody>
        </table><br/>
        <div id="alignCenter">
          <p>Do you want a quote? Use the <Link to="/contact">contact</Link> form to get started.</p>
        </div>
      </div>
    );
  }
}

export default Services;
