import React, { Component } from 'react';

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
            Step #1: Project Outline (2 Hours)
          </div>
          <div className="panel-block">
            <p>The first step is meeting with you in-person or via Skype to discuss your website. During our initial meeting, we will complete an outline describing in detail the contents and functionality of each individual page. We will work together to establish project expectations and requirements.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Smalldescription;
