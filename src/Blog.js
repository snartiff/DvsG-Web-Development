import React, { Component } from 'react';
import Parser from 'html-react-parser';
import {Link} from 'react-router-dom';
import shortid from 'shortid';
import axios from 'axios';

class Blog extends Component {
  constructor(props) {
  super(props);
  this.state = {
    filteredPosts: [],
    posts: []
  };

  this.handleTags = this.handleTags.bind(this);
  this.filterPosts = this.filterPosts.bind(this);
}

componentDidMount() {
  axios.get('http://www.dvsgblog.com/wp-json/wp/v2/dvsgpost')
    .then( (response) => {
      this.setState({
        posts: response.data,
        filteredPosts: response.data
      })
    })
    .catch( (error) => {
      console.log(error);
    });
}

filterPosts(e) {
    if (e.target.value === "") {
      this.setState({
        filteredPosts: this.state.posts
      })
      e.currentTarget.classList.remove('valid');
    } else {
      let filteredArray = [];
      let hasTag = null;
      let hasTitle = null;
      for (let post of this.state.posts) {
        hasTag = post.acf.tags.toLowerCase().includes(e.target.value.toLowerCase());
        hasTitle = post.title.rendered.toLowerCase().includes(e.target.value.toLowerCase())
        if (hasTag || hasTitle ) {
          filteredArray.push(post);
          e.currentTarget.classList.add('valid');
        } else {
          e.currentTarget.classList.remove('valid');
        }
      }
      this.setState({
        filteredPosts: filteredArray
      })
    }

}

handleTags(tagsString) {
  let tags = [];
  let tagsArray = tagsString.split(',');
  for (let tag of tagsArray) {
    tags.push(<li key={shortid.generate()} className="tag is-primary is-rounded">{'#' + tag.trim()}</li>)
  }

  return tags
}

  render() {
    if ( this.state.posts.length > 0 ) {
      return (
        <div className="Blog">
          <div id="alignCenter">
            <h1 id="blogTitle" className="title is-2">Code and Conquer</h1>
          </div>
          <div id="searchbar" className="control has-icons-left has-icons-right">
            <input className="input is-black" onKeyUp={this.filterPosts} type="text" placeholder="filter posts by title or tag"></input>
            <span className="icon is-small is-left">
              <i className="fa fa-search"></i>
            </span>
          </div>
            {this.state.filteredPosts.map( (post, index) =>
              <div key={post.id}>
                <div id="postCart" className="card">
                  <header className="card-header">
                    <div className="thumbDiv">
                      <figure id="thumb" className="image is-64x64">
                        <img id="blogThumb" src={post.acf.image.url}></img>
                      </figure>
                    </div>
                    <p className="card-header-title" id="blogHeader">
                      <Link to={"/code_and_conquer/post/" + post.id + "/" + post.title.rendered}>{ Parser(post.title.rendered) }</Link>
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
