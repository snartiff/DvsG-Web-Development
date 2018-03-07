import React, { Component } from 'react';

class Goal extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render() {
    return (
      <div className="Goal">
        <div id="alignCenter">
          <h1 className="title is-2">Goals</h1>
        </div><br/>
      <h2 className="subtitle is-5">
        1.) Set and Achieve Website Objectives
      </h2>
      <p>
        We'll create an outline of your website and decide what the objective of your site truly is. Once we establish an objective, we'll discuss what your call-to-action will be and how to bring attention to it.
      </p><br/>
      <h2 className="subtitle is-5">
        2.) Mobile-Responsive Design
      </h2>
        <p>
          I'll help you succeed by using mobile-responsive design. Your site will look great on both a cell phone
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

export default Goal;
