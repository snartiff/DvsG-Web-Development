import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Contact">
        <div id="alignCenter">
          <h1 className="title is-2">Contact</h1>
        </div><br />
        <form action="https://formspree.io/dvsgweb@gmail.com" method="POST">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-black" type="text" placeholder="your name" type="text" name="name"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-black" placeholder="your email" type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Subject</label>
            <div className="select is-black">
              <select name="_subject">
                <option>Get Quote</option>
                <option>Report Bug</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea is-black" placeholder="your message" name="message"></textarea><br></br>
            </div>
          </div>
          <div className="field">
            <input className="button is-primary is-outlined is-medium" type="submit" value="Send"></input>
          </div>
          <input type="hidden" name="_next" value="//localhost:3000/contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
