import React, { Component } from 'react';
import Parser from 'html-react-parser';
import {Link} from 'react-router-dom';
import shortid from 'shortid';

class Blog extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };
  this.handleTags = this.handleTags.bind(this);
}

handleTags(tagsString) {
  let tags = [];
  let tagsArray = tagsString.split(',');

  for (let tag of tagsArray) {
    tags.push(<li key={shortid.generate()} className="tag is-light is-rounded">{tag}</li>)
  }

  return tags
}

  render() {
    if ( this.props.posts ) {
      return (
        <div className="Blog">
          <div id="alignCenter">
            <h1 id="blogTitle" className="title is-2">Blog</h1>
          </div>
            {this.props.posts.map( (post, index) =>
              <div key={post.id}>
                <div id="postCart" className="card">
                  <header className="card-header">
                    <div>
                      <figure id="thumb" className="image is-64x64">
                        <img id="blogThumb" src={post.acf.image.url}></img>
                      </figure>
                    </div>
                    <p className="card-header-title" id="blogHeader">
                      <Link to={"/blog/post/" + post.id + "/" + post.title.rendered}>{ Parser(post.title.rendered) }</Link>
                      <span id="date"><span id="whiteSpace">...</span>{post.acf.datepublished}</span>
                    </p><br/><br/>
                      <div className="card-footer-item">
                        <span><ul id="blogFooter">{this.handleTags(post.acf.tags)}</ul></span>
                      </div>
                  </header>
                  <footer className="card-footer">
                  </footer>
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
