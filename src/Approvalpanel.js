import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './font-awesome/css/font-awesome.min.css';


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
            Client Approval
          </div>
          <div className="panel-block">
            <p>Fruitcake pudding dessert cupcake cheesecake dragée pudding bonbon. Ice cream cupcake jelly beans pastry cookie chupa chups macaroon cheesecake jelly-o. Marzipan pastry soufflé lollipop.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalPanel;
