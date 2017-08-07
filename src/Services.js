import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Services extends Component {
  constructor(props) {
  super(props);
  this.state = {
    post: ""
  };
}
  render() {
    return (
      <div className="Services">
        <h1 id="experienceHeaders" className="title is-1">Services</h1>
        <table id="servicesTable" className="table is-striped">
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
              <th>Web Development & Design - Small Project</th>
              <td>$40</td>
              <td>40</td>
              <td>$1600</td>
            </tr>
            <tr>
              <th>Web Development & Design - Medium Project</th>
              <td>$40</td>
              <td>80</td>
              <td>$3200</td>
            </tr>
            <tr>
              <th>Web Development & Design - Large Project</th>
              <td>$40</td>
              <td>120+</td>
              <td>$4800+</td>
            </tr>
            <tr>
              <th>Web Domain Setup</th>
              <td>$40</td>
              <td>10</td>
              <td>$400</td>
            </tr>
            <tr>
              <th>Logo Design - 3 concepts</th>
              <td>$40</td>
              <td>20</td>
              <td>$800</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Services;
