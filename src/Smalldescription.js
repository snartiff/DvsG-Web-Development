import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './font-awesome/css/font-awesome.min.css';


class Smalldescription extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Smalldescription">
        <div className="panel" id="chartPanel">
          <div className="panel-heading">
            Project Outline
          </div>
          <div className="panel-block">
            <p>Lorem ipsum dolor sit amet, no justo deseruisse mei, mea mazim accumsan vituperatoribus ei. Habeo justo fastidii cu usu. Eum etiam paulo evertitur id, eum prodesset adipiscing an. Et quo nostro vituperata dissentiunt, ut qui prompta convenire maluisset.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Smalldescription;
