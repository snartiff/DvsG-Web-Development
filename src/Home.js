import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import knight from './images/knight.svg'
import monster from './images/monster.svg'


class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
    post: ""
  };
}
  render() {
    return (
      <div className="Home">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">DvsG</h1>
             <h2 className="subtitle">websites that conquer</h2>
            </div>
          </div>
        </section>
        <div id="illustrations">
          <img id="knight" src={knight} alt="knight"/>
          <img id="monster" src={monster} alt="monster"/>
        </div><br />
        <div id="alignCenter">
          <h1 id="illustrationSub" className="title is-3">You're not going to let Goliath win. Are you?</h1>
        </div><br/>
        <div id="homeButton">
        <Link className="button is-primary is-outlined is-large" to="/services">View Services</Link>
        </div>
      </div>
    );
  }
}

export default Home;
