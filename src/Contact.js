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

  if ( fieldName === "name" ) {
    this.setState({
      nameFieldValue: fieldValue
    })
    //Check if the Name Field has a value
    fieldValue !== "" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');

  } else if ( fieldName === "_replyto" ) {
    this.setState({
      emailFieldValue: fieldValue
    })
    //Use email regex expression to check if the Email is valid
    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = fieldValue.match(emailRegExp);
    isValidEmail !== null ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');
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
    fieldValue !== "Choose Subject" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');
  } else {
    this.setState({
      messageFieldValue: fieldValue
    })
    //Check if the Message Field has a value
    fieldValue !== "" ? e.currentTarget.classList.add('valid') : e.currentTarget.classList.remove('valid');
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
        <form action="https://formspree.io/dvsgweb@gmail.com" method="POST">
          <div className="field">
            <label className="label"><span className="asteric">*</span> Name</label>
            <div className="control">
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput" type="text" type="text" name="name"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label"><span className="asteric">*</span> Email</label>
            <div className="control">
              <input className="input is-black" onChange={this.handleFieldChange} id="contactInput"  type="email" name="_replyto"></input><br></br>
            </div>
          </div>
          <div className="field">
            <label className="label"><span className="asteric">*</span> Subject</label>
            <div className="select is-black">
              <select name="_subject" onChange={this.handleFieldChange}>
                <option>Choose Subject</option>
                <option>Web Development: Small Project ($2000)</option>
                <option>Web Development: Medium Project ($4000)</option>
                <option>Web Development: Large Project ($6000)</option>
                <option>Logo Design: 3 Logos ($1000)</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label"><span className="asteric">*</span> Message</label>
            <div className="control">
              <textarea className="textarea is-black" onChange={this.handleFieldChange} id="contactInput" name="message"></textarea><br></br>
            </div>
          </div>
          <div className="field">
            <input className={this.state.areValid ? "button is-primary is-medium" : "button is-primary is-medium is-outlined"} onClick={this.handleSubmit} id="submitButton" type="submit" value="Send"></input>
          </div>
          <input type="hidden" name="_next" value="//localhost:3000/contact" />
        </form>
      </div>
    );
  }
}

export default Contact;
