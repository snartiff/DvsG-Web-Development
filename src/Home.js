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
             <h2 className="subtitle">small business conquers</h2>
            </div>
          </div>
        </section>
        <div id="illustrations">
          <img id="knight" src={knight} alt="knight"/>
          <img id="monster" src={monster} alt="monster"/>
        </div>
        <h1 id="illustrationSub" className="title is-2">You&#39;re not going to let Goliath win. Are you?</h1>
        <div id="homeButton">
        <li className="button is-primary is-outlined is-large is-focused"><Link to="/about">Defeat Goliath</Link></li>
        </div>
      </div>
    );
  }
}

export default Home;
