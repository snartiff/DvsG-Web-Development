import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import Parser from 'html-react-parser';

class Post extends Component {
  constructor(props) {
  super(props);
  this.state = {
    id: null,
    currentPost: null
  };
}

componentDidMount() {
  let currentPath = window.location.href;
  let currentPathArray = currentPath.split("/");
  let currentPathArrayLength = currentPathArray.length;
  let postId = Number(currentPathArray[currentPathArrayLength - 1]);

  if (this.props.posts !== undefined ) {
    this.setState({
      id: postId,
      currentPost: this.props.posts[postId]
    })
  }

  let d = document;
  let s = d.createElement('script');
  s.src = 'https://dvsg.disqus.com/embed.js';
  s.setAttribute('data-timestamp', + new Date());
  (d.head || d.body).appendChild(s);
}

  render() {
    let postTitle = null;
    let post = null;

    if (this.state.currentPost !== null) {
      postTitle = <h1 id="postTitle" className="title is-1">{Parser(this.state.currentPost.title.rendered)}</h1>
      post = <div>{ Parser( this.state.currentPost.content.rendered ) }</div>
    } else {
      post = <h1></h1>
    }

    if (this.props.posts && this.state.id !== null && this.state.currentPost !== null) {
      return (
        <div className="Post">
        <div>{postTitle}</div>
        <div>{post}</div>
            <div className="subscribeForm">
              <div id="mc_embed_signup">
                <form action="//dvsgblog.us16.list-manage.com/subscribe/post?u=04d6d69ccd0cbe911bc608528&amp;id=c2cad7d15d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <h5 id="emailHeader">Want more tips? Subscribe to my list</h5>
                      <input name="EMAIL" type="email" placeholder="your email" className="required email input is-medium is-black" id="mce-EMAIL"></input>
                    </div>
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response"></div>
                        <div className="response" id="mce-success-response"></div>
                      </div>
                        <div id="hiddenForm" aria-hidden="true">
                          <input type="text" name="b_04d6d69ccd0cbe911bc608528_c2cad7d15d" tabIndex="-1" value=""></input>
                        </div>
                        <div className="clear">
                          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-medium is-black"></input>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            <div id="disqus_thread"></div>
        </div>
      );
    } else {
        return(
          <div className="Post">
          </div>
        );
      }
    }
}

export default Post;
