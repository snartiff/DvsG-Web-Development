import React, { Component } from 'react';
import Subscribe from './Subscribe.js';
import Parser from 'html-react-parser';
import axios from 'axios';
import { ShareButtons, generateShareIcon } from 'react-share';

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
    posts: null,
    currentPost: null
  };
  this.getPosts = this.getPosts.bind(this);
  this.appendDisqus = this.appendDisqus.bind(this);
  this.openPhotoUrl = this.openPhotoUrl.bind(this);
}

getPosts() {
  axios.get('http://www.dvsgblog.com/wp-json/wp/v2/dvsgpost')
    .then( (response) => {
      this.setState({
        posts: response.data
      })

      let currentPath = window.location.href;
      let currentPathArray = currentPath.split("/");
      let currentPathArrayLength = currentPathArray.length;
      let postId = Number(currentPathArray[currentPathArrayLength - 2]);
      let curPost = null;

      for (let post of response.data) {
        if (post.id === postId) {
          curPost = post;
          this.setState({
            currentPost: curPost
          })
        }
      }

    })
    .catch( (error) => {
      console.log(error);
    });
}

openPhotoUrl() {
  window.open(this.state.currentPost.acf.photobyurl);
}

componentDidMount() {
  this.getPosts();
}

appendDisqus() {
  //Append the Disqus comment thread to the page
  let d = document;
  let s = d.createElement('script');
  s.src = 'https://dvsg.disqus.com/embed.js';
  s.setAttribute('data-timestamp', + new Date());
  (d.head || d.body).appendChild(s);
}

  render() {
    let url = window.location.href;

    if (this.state.posts !== null && this.state.currentPost !== null ) {
      this.appendDisqus();
    }

    if (this.state.posts !== null && this.state.currentPost !== null ) {
      return (
        <div className="Post">
          <div>
            <h1 id="postTitle" className="title is-2">{Parser(this.state.currentPost.title.rendered)}</h1>
          </div>
          <div id="image">
            <img src={this.state.currentPost.acf.image.url}></img>
          </div>
          <div className="captionDiv">
            <p className="caption">
              <a onClick={this.openPhotoUrl}>photo credit: {this.state.currentPost.acf.caption}</a>
            </p>
          </div>
          <div className="paragraphs">
            <div id="postContent">
              { Parser(this.state.currentPost.content.rendered) }
            </div>
          </div>
          <div id="socialButtons">
            <LinkedinShareButton
                url={url}
                className="Demo__some-network__share-button">
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>
            <TwitterShareButton
              url={url}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
            <EmailShareButton
              url={url}
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
