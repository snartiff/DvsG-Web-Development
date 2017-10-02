import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './Blog';
import Post from './Post';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Mission from './Mission';
import Resume from './Resume';
import Smallproject from './Smallproject';
import Mediumproject from './Mediumproject';
import Largeproject from './Largeproject';
import Logodesign from './Logodesign';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/code_and_conquer/post/:id/:title" component={Post}/>
      <Route path="/mission" component={Mission}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/services" component={Services}/>
      <Route path="/small_project" component={Smallproject}/>
      <Route path="/medium_project" component={Mediumproject}/>
      <Route path="/large_project" component={Largeproject}/>
      <Route path="/logo_design" component={Logodesign}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
