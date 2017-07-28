import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    post: ""
  };
}
  render() {
    return (
      <div className="Contact">
        <h1>Hello Contact!</h1>
      </div>
    );
  }
}

export default Contact;
