import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    subjectValue: "",
    nameFieldValue: "",
    emailFieldValue: "",
    messageFieldValue: ""
  };
  this.handleFieldChange = this.handleFieldChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
  document.getElementById("submitButton").disabled = true;
}

handleFieldChange(e) {
  let fieldValue = e.target.value;
  let fieldName = e.target.attributes.getNamedItem('name').value;

  if ( fieldName == "name" ) {
    this.setState({
      nameFieldValue: fieldValue
    })
    fieldValue != "" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');

  } else if ( fieldName == "_replyto" ) {
    this.setState({
      emailFieldValue: fieldValue
    })
    fieldValue != "" && fieldValue.indexOf('@') > -1 ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');

  } else if (fieldName == "_subject") {
    this.setState({
      subjectValue: fieldValue
    })
    fieldValue != "Choose Subject" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');
  } else {
    this.setState({
      messageFieldValue: fieldValue
    })
    if ( fieldName != "" ) {
      e.currentTarget.classList.add('valid');
    }
    fieldValue != "" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');
  }

    if (this.state.nameFieldValue != "" && this.state.emailFieldValue != "" && this.state.messageFieldValue != "" && this.state.subjectValue != "Choose Subject") {
      document.getElementById("submitButton").disabled = false;
    }
}

handleSubmit(e) {
    if (this.state.nameFieldValue == "" || this.state.emailFieldValue == "" || this.state.messageFieldValue == "" || this.state.subjectValue == "Choose Subject") {
      e.preventDefault();
      document.getElementById("submitButton").disabled = true;
      window.alert("Please complete all of the fields before submitting the form. Thank you!")
    }
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
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput" type="text" placeholder="your name" type="text" name="name"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput" placeholder="your email" type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label">Subject</label>
            <div className="select is-black">
              <select name="_subject" onChange={this.handleFieldChange}>
                <option>Choose Subject</option>
                <option>Get Quote</option>
                <option>Report Bug</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea is-black" onChange={this.handleFieldChange} id="contactInput" placeholder="your message" name="message"></textarea><br></br>
            </div>
          </div>
          <div className="field">
            <input className="button is-primary is-outlined is-medium" onClick={this.handleSubmit} id="submitButton" type="submit" value="Send"></input>
          </div>
          <input type="hidden" name="_next" value="//localhost:3000/contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
