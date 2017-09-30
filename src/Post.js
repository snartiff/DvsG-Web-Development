import React, { Component } from 'react';
import Subscribe from './Subscribe.js';
import Parser from 'html-react-parser';
import axios from 'axios';
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} = ShareButtons;

const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');
const EmailIcon = generateShareIcon('email');

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
  let image = null;
  let caption = null;
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
    image = <img src={curPost.acf.image.url}></img>
    caption = <p className="caption">{curPost.acf.caption}</p>
    postArray.push(postTitle, post, image, caption);
  } else {
    postArray.push(postTitle, post, image, caption);
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
  this.getPosts();
}

  render() {
    let url = window.location.href;
    let postArray = this.getCurrentPost();
    let title = postArray[0];
    let post = postArray[1];
    let image = postArray[2];
    let caption = postArray[3];
    let disqusDiv = document.getElementById('disqus_thread');
    if (this.state.posts.length !== 0) {
      this.appendDisqus();
    }
    if (this.state.posts.length !== 0 ) {
      return (
        <div className="Post">
          <div>
            {title}
          </div>
          <div id="image">
            {image}
          </div>
          <div>
            {caption}
          </div>
          <div>
            {post}
          </div>
          <div id="socialButtons">
            <LinkedinShareButton
                url={url}
                quote={title.props.children}
                className="Demo__some-network__share-button">
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>
            <TwitterShareButton
              url={url}
              title={title.props.children}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
            <EmailShareButton
              url={url}
              subject={title.props.children}
              body="Here is an interesting post from Code and Conquer I thought you'd like to read."
              className="Demo__some-network__share-button">
              <EmailIcon
                size={32}
                round />
            </EmailShareButton>
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
