import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './Blog';
import Post from './Post';
import About from './About';
import Process from './Process';
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import Experience from './Experience';
import Mission from './Mission';
import Curriculum from './Curriculum';
import Launch from './Launch';
import Msba from './Msba';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/blog/post/:id/:title" component={Post}/>
      <Route path="/mission" component={Mission}/>
      <Route path="/experience/msba" component={Msba}/>
      <Route path="/experience/ca" component={Curriculum}/>
      <Route path="/experience/launch_academy" component={Launch}/>
      <Route path="/process" component={Process}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
