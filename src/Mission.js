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
        </div><br/>
        <p>
          What Can We Accomplish Together? My sole purpose as your web developer and designer is to take your
          dreams and make them a reality. DvsG (David vs Goliath) is dedicated to
          helping small businesses and individuals be successful. How can I help you
          be successful?
        </p><br />
        <p>
          I'll help you succeed by taking a modern day approach to web development. This means a few things:
           mobile-first design and speed. Your site will look just as sharp on a cell phone
           as it does on a desktop computer and it'll load quickly.
        </p><br />
        <p>
          In addition, I'll focus on maintaining your brand. This is an essential part of your success. I want your site
          to be a true reflection of what you and your brand stand for. Your website will be built
          and designed with your target market in mind.
        </p>
      </div>
    );
  }
}

export default Mission;
