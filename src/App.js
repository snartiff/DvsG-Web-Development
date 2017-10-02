import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import './font-awesome/css/font-awesome.min.css'
import Navigation from './Navigation.js';
import Home from './Home.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: []
  };
}

  render() {
    let homePage = null;

    homePage = this.props.location.pathname === "/" ? <Home /> : null;

    return (
      <div className="App">
        <Navigation />
        {homePage}
      </div>
    );
  }
}

export default App;
