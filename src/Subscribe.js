import React, { Component } from 'react';

class Subscribe extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

handleFieldChange(e) {
  let fieldValue = e.target.value;
  let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValidEmail = fieldValue.match(emailRegExp);

    //Check if the value entered is an email and add valid class if valid email
    if ( isValidEmail != null ) {
      // document.getElementById("mc-embedded-subscribe").disabled = false;
      e.currentTarget.classList.add('valid')
    } else {
      e.currentTarget.classList.remove('valid');
    }
}

  render() {
      return (
        <div className="Subscribe">
          <div className="subscribeForm">
            <div id="mc_embed_signup">
              <form action="//dvsgblog.us16.list-manage.com/subscribe/post?u=04d6d69ccd0cbe911bc608528&amp;id=c2cad7d15d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <p id="emailHeader">Want to hear more? Subscribe to my email list.</p>
                    <input name="EMAIL" type="email" onKeyUp={this.handleFieldChange} className="required email input is-black" id="mce-EMAIL"></input>
                  </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response"></div>
                      <div className="response" id="mce-success-response"></div>
                    </div>
                      <div id="hiddenForm" aria-hidden="true">
                        <input type="text" name="b_04d6d69ccd0cbe911bc608528_c2cad7d15d" tabIndex="-1" value=""></input>
                      </div>
                      <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-primary is-outlined"></input>
                      </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      );
  }
}

export default Subscribe;
