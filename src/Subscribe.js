import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import Iframe from 'react-iframe';

class Subscribe extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
      return (
        <div className="Subscribe">
            <div id="subscribeDiv">
              <Iframe url="sign_up.html">
              </Iframe>
            </div>
        </div>
      );
  }
}

export default Subscribe;
