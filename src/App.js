import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import './font-awesome/css/font-awesome.min.css'
import Navigation from './Navigation.js';
import Home from './Home.js';
import Blog from './Blog.js';
import axios from 'axios';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: []
  };
}

componentDidMount() {
    axios.get('http://www.dvsgblog.com/wp-json/wp/v2/dvsgpost')
      .then( (response) => {
        this.setState({
          posts: response.data
        })
      })
      .catch( (error) => {
        console.log(error);
      });
}

  render() {
    let homePage = null;
    let blogPage = null;

    homePage = this.props.location.pathname === "/" ? <Home /> : null;
    blogPage = this.props.location.pathname === "/code_and_conquer" ? <Blog posts={this.state.posts} /> : null;

    return (
      <div className="App">
        <Navigation />
        {homePage}
        {blogPage}
      </div>
    );
  }
}

export default App;
