import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './font-awesome/css/font-awesome.min.css';


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
            Wireframes
          </div>
          <div className="panel-block">
            <p>Halvah sweet roll gingerbread soufflé powder tiramisu fruitcake. Cheesecake cookie carrot cake pastry cotton candy. Pastry sugar plum marshmallow cupcake gummi bears jelly.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WireframesPanel;
