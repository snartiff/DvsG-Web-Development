import React, { Component } from 'react';
import Subscribe from './Subscribe.js';
import Parser from 'html-react-parser';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: []
  };
  this.getPosts = this.getPosts.bind(this);
  this.appendDisqus = this.appendDisqus.bind(this);
  this.getCurrentPost = this.getCurrentPost.bind(this);
}

getPosts() {
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

getCurrentPost() {
  //Retrieve the post id from the URL
  let currentPath = window.location.href;
  let currentPathArray = currentPath.split("/");
  let currentPathArrayLength = currentPathArray.length;
  let postId = Number(currentPathArray[currentPathArrayLength - 2]);
  let curPost = null;
  let postTitle = null;
  let post = null;
  let postArray = [];

  //Find the correct post by matching the id from the URL with the ids from the array of posts
  if (this.state.posts.length !== 0) {
    for (let post of this.state.posts) {
      if (post.id === postId) {
        curPost = post;
      }
    }
    postTitle = <h1 id="postTitle" className="title is-2">{Parser(curPost.title.rendered)}</h1>
    post = <div id="postContent">{ Parser( curPost.content.rendered ) }</div>
    postArray.push(postTitle, post);
  } else {
    postArray.push(postTitle, post);
}
  return postArray;
}

appendDisqus() {
  //Append the Disqus comment thread to the page
  let d = document;
  let s = d.createElement('script');
  s.src = 'https://dvsg.disqus.com/embed.js';
  s.setAttribute('data-timestamp', + new Date());
  (d.head || d.body).appendChild(s);
}

componentDidMount() {
  //Retrieve blog posts from the WordPress API
  this.getPosts();
}

  render() {
    let postArray = this.getCurrentPost();
    let postTitle = postArray[0];
    let post = postArray[1];

    if (this.state.posts.length !== 0) {
      this.appendDisqus();
    }

    if (this.state.posts.length !== 0 ) {
      return (
        <div className="Post">
          <div>
            {postTitle}
          </div>
          <div>
            {post}
          </div>
          <div>
            <Subscribe />
          </div>
          <div id="disqus_thread">
          </div>
        </div>
      );
    } else {
        return(
          <div className="Post">
            <h1></h1>
          </div>
        );
      }
    }
}

export default Post;
