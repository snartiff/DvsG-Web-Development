import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import axios from 'axios';
import Parser from 'html-react-parser';

class Blog extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}

  render() {
    if ( this.props.posts ) {
      return (
        <div className="Blog">
            {this.props.posts.map( (post) =>
              <div key={post.id}>
                <h1 id="postTitle" className="title is-1">{ Parser( post.title.rendered ) }</h1>
                <div>{ Parser( post.content.rendered ) }</div>
              </div>
            )}
        </div>
      );
    } else {
      return (
        <div className="Blog">
        </div>
      );
    }
  }
}

export default Blog;
