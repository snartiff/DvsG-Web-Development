import React, { Component } from 'react';

class ApprovalPanel extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="ApprovalPanel">
        <div className="panel" id="chartPanel">
          <div className="panel-heading">
            Step #4: Client Approval (5 Hours)
          </div>
          <div className="panel-block">
            <p>The last step in the process is your final approval. If you see anything that you want changed after we review the site together, I'll make these changes so that leave as a happy client.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalPanel;
