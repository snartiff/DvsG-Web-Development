import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import './font-awesome/css/font-awesome.min.css'
import Navigation from './Navigation.js';
import Home from './Home.js';
import Blog from './Blog.js';
import Post from './Post.js'
import axios from 'axios';
import Parser from 'html-react-parser';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

componentDidMount() {
  axios.get('http://www.dvsgblog.com/wp-json/wp/v2/posts')
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
    let postPage = null;
    
    let currentUrl = this.props.location.pathname;
    let currentUrlArray = currentUrl.split("/");
    let isPostPath = currentUrlArray.indexOf("post");

    homePage = this.props.location.pathname === "/" ? <Home /> : null;
    blogPage = this.props.location.pathname === "/blog" ? <Blog posts={this.state.posts} comments={this.state.comments} /> : null;
    postPage = isPostPath > -1 ? <Post posts={this.state.posts} /> : null;

    return (
      <div className="App">
        <Navigation />
        {homePage}
        {blogPage}
        {postPage}
      </div>
    );
  }
}

export default App;
