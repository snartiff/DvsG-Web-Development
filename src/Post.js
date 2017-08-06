import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import axios from 'axios';
import Parser from 'html-react-parser';

class Post extends Component {
  constructor(props) {
  super(props);
  this.state = {
    id: null
  };
}

componentDidMount() {
  var currentPath = window.location.href;
  var currentPathArray = currentPath.split("/");
  var currentPathArrayLength = currentPathArray.length;
  var postId = Number(currentPathArray[currentPathArrayLength - 1]);
  this.setState({
    id: postId
  })
  var d = document;
  var s = d.createElement('script');
  s.src = 'https://dvsg.disqus.com/embed.js';
  s.setAttribute('data-timestamp', + new Date());
  (d.head || d.body).appendChild(s);
}

  render() {
    if (this.props.posts && this.state.id != null) {
      let currentPost = this.props.posts[this.state.id];
      debugger;
      return (
        <div className="Post">
            {this.props.posts.map( (post) =>
              <div key={this.state.id}>
                <h1 id="postTitle" className="title is-1">{ Parser( currentPost.title.rendered ) }</h1>
                <div>{ Parser( currentPost.content.rendered ) }</div>
              </div>
            )}
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