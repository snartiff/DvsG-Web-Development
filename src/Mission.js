import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'


class Mission extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Mission">
        <div id="alignCenter">
          <h1 className="title is-2">Mission</h1>
          <h3 className="subtitle is-6">What You Should Expect</h3>
        </div><br/>
      <h2 className="subtitle is-5">
        1.) Set and Achieve Goals
      </h2>
      <p>
        We'll create an outline of your website and decide what the goal of your site truly is. Once we establish a goal, we'll discuss your call-to-action and what we can do to best accomplish your goal online.
        Part of this process is establishing realistic expectations and minimum project requirements.
      </p><br/>
      <h2 className="subtitle is-5">
        2.) Mobile-First Design
      </h2>
        <p>
          I'll help you succeed by using mobile-first design. Your site will look great on both a cell phone
          and a desktop computer. I will leverage proven CSS styling frameworks and test your site on several different-sized
          devices.
        </p><br />
      <h2 className="subtitle is-5">
          3.) Consistent Brand Image
      </h2>
        <p>
            Together, we'll stablish a unique brand image online and maintain this image throughout your website.
            Your website will be built and designed with your target market in mind.
        </p><br />
      <h2 className="subtitle is-5">
          4.) Flexibility
      </h2>
      <p>
          I'll do my absolute best to adjust according to your needs. If you need to reschedule one of our meetings, change a feature, or need a flexible payment option, I'll work with you to alleviate your concerns.
      </p>
      </div>
    );
  }
}

export default Mission;
