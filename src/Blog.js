import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './font-awesome/css/font-awesome.min.css'
import Parser from 'html-react-parser';
import Post from './Post.js';
import {Link} from 'react-router-dom';
import striptags from 'striptags';

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
              <div key={index}>
                <div id="postCart" className="card">
                  <header className="card-header">
                    <p className="card-header-title"><Link to={"/blog/post/" + index}>{ Parser(post.title.rendered) }</Link></p>
                  </header>
                  <div className="card-content">
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</div>
                </div>
              </div>
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
