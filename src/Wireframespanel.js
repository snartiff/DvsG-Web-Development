import React, { Component } from 'react';

class WireframesPanel extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="WireframesPanel">
        <div className="panel" id="chartPanel">
          <div className="panel-heading">
            Step #2: Wireframes (6 hours)
          </div>
          <div className="panel-block">
            <p>The second step involves creating wireframes based on your project outline. Your wireframes will be a visual representation of each page. I'll do a first draft, you'll have the opportunity to review the design, and then I'll do a revised final draft for you.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WireframesPanel;
