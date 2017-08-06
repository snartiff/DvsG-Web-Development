import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import Parser from 'html-react-parser';
import Post from './Post.js';
import {Link} from 'react-router-dom';


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
            {this.props.posts.map( (post, index) =>
              <div key={post.title.index}>
                <h3 id="postTitle" className="title is-1"><Link to={"/blog/post/" + index}>{ Parser(post.title.rendered) }</Link></h3>
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
