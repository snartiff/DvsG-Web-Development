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
        <h1  id="contactHeader" className="title is-2">Hello there! Would You Like to Contact Me?</h1>
        <form action="https://formspree.io/dvsgweb@gmail.com" method="POST">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="your name" type="text" name="name"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" placeholder="your email" type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="your message" name="message"></textarea><br></br>
            </div>
          </div>
          <div id="contactForm">
            <input className="button is-primary is-medium" type="submit" value="Send"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
