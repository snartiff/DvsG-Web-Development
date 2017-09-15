import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './font-awesome/css/font-awesome.min.css';


class WebDevPanel extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="WebDevPanel">
        <div className="panel" id="chartPanel">
          <div className="panel-heading">
            Website Development
          </div>
          <div className="panel-block">
            <p>Jelly-o jelly-o carrot cake lemon drops apple pie. Macaroon ice cream fruitcake tiramisu tart oat cake jelly tart pudding. Pastry sweet roll tiramisu ice cream sugar plum soufflé chocolate cake. Marshmallow soufflé bonbon chocolate sweet roll.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDevPanel;
