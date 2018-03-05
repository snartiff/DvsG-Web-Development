import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
  super(props);
  this.state = {
    subjectValue: "",
    nameFieldValue: "Choose Subject",
    messageFieldValue: "",
    emailFieldValue: "",
    isValidEmail: false,
    emailIsSent: false,
    areValid: false
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
  var checkmarks = document.querySelectorAll(".fa-check-circle");

  if ( fieldName === "name" ) {
    this.setState({
      nameFieldValue: fieldValue
    })
    //Check if the Name Field has a value
    fieldValue !== "" ? checkmarks[0].classList.add('valid-icon') : checkmarks[0].classList.remove('valid-icon');

  } else if ( fieldName === "_replyto" ) {
    this.setState({
      emailFieldValue: fieldValue
    })
    //Use email regex expression to check if the Email is valid
    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = fieldValue.match(emailRegExp);
    isValidEmail !== null ? checkmarks[1].classList.add('valid-icon') : checkmarks[1].classList.remove('valid-icon');
    if (isValidEmail) {
      this.setState({
        isValidEmail: true
      })
    } else {
      this.setState({
        isValidEmail: false
      })
    }

  } else if (fieldName === "_subject") {
    this.setState({
      subjectValue: fieldValue
    })
    //Check if the Subject Field is not the default 'Choose Subject' value
    fieldValue !== "Choose Subject" ? checkmarks[2].classList.add('valid-icon') : checkmarks[2].classList.remove('valid-icon');
  } else {
    this.setState({
      messageFieldValue: fieldValue
    })
    //Check if the Message Field has a value
    fieldValue !== "" ? checkmarks[3].classList.add('valid-icon') : checkmarks[3].classList.remove('valid-icon');
  }

    if (this.state.nameFieldValue !== "" && this.state.isValidEmail !== false && this.state.messageFieldValue !== "" && (this.state.subjectValue !== "Choose Subject" || this.state.subjectValue !== "") ) {
      document.getElementById("submitButton").disabled = false;
      this.setState({
        areValid: true
      })
    }
}

handleSubmit(e) {
    if (this.state.nameFieldValue === "" || this.state.isValidEmail === false || this.state.messageFieldValue === "" || this.state.subjectValue === "Choose Subject") {
      e.preventDefault();
      document.getElementById("submitButton").disabled = true;

    } else {
      this.setState({
        emailIsSent: true
      })
    }
}

  render() {
    let infoMessage = null;
    if (this.state.isValidEmail && this.state.emailIsSent) {
      infoMessage = "Thank you for sending a message!"
    } else {
      infoMessage = "Please complete all fields"
    }

    return (
      <div className="Contact">
        <div id="alignCenter">
          <h1 className="title is-2">Contact</h1>
          <h2 className={this.state.emailIsSent ? "subtitle is-6 is-aqua" : "subtitle is-6"}>{infoMessage}</h2>
        </div><br />
      <form action="https://formspree.io/sean.nartiff@dvsgweb.com" method="POST">
          <div className="field">
            <label className="label"><span className="asteric">*</span> Name <span><i className="fa fa-check-circle"></i></span></label>
            <div className="control">
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput" type="text" type="text" name="name"></input><br></br>

            </div>
          </div>
          <div className="field">
            <label className="label"><span className="asteric">*</span> Email <span><i className="fa fa-check-circle"></i></span></label>
            <div className="control">
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput"  type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label"><span className="asteric">*</span> Subject <span><i className="fa fa-check-circle"></i></span></label>
            <div className="select is-black">
              <select name="_subject" onChange={this.handleFieldChange}>
                <option>Choose Subject</option>
                <option>Web Development & Design: Small Project</option>
                <option>Web Development & Design: Medium Project</option>
                <option>Web Development & Design: Large Project</option>
                <option>Free 30 Minute Consultation</option>
                <option>Question</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label"><span className="asteric">*</span> Message <span><i className="fa fa-check-circle"></i></span></label>
            <div className="control">
              <textarea className="textarea is-black" onChange={this.handleFieldChange} id="contactInput" name="message"></textarea><br></br>
            </div>
          </div>
          <div className="field">
            <input className={this.state.areValid ? "button is-primary is-medium" : "button is-primary is-medium is-outlined"} onClick={this.handleSubmit} id="submitButton" type="submit" value="Send"></input>
          </div>
          <input type="hidden" name="_next" value="http://www.dvsgweb.com/contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
