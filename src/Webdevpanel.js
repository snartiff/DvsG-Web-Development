import React, { Component } from 'react';
import {getCurrentUrl} from './Helpers.js';

class WebDevPanel extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    let panelTitle = "";
    let isSmallProject = getCurrentUrl("small_project");
    let isMediumProject = getCurrentUrl("medium_project");
    let isLargeProject = getCurrentUrl("large_project");

    if ( isSmallProject > -1 ) {
      panelTitle = "Step #3: Web Development (33 Hours)";
    } else if ( isMediumProject > -1 ) {
      panelTitle = "Step #3: Web Development (65 Hours)";
    } else if ( isLargeProject > -1 ) {
      panelTitle = "Step #3: Web Development (105 Hours)";
    } else {
      panelTitle = "";
    }

    return (
      <div className="WebDevPanel">
        <div className="panel" id="chartPanel">
          <div className="panel-heading">
            {panelTitle}
          </div>
          <div className="panel-block">
            <p>The third step will be coding and launching your website. I'll make sure your site looks great on both mobile and desktop devices, so don't worry! A free Heroku domain will be provided. If you want a unique domain name, you must pay for the domain name and for additional setup costs.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDevPanel;
