// Import react to so the app can use it
import React from 'react';
// Import react-router components and objects needed for project.
import {Router, Route, Link, browserHistory } from 'react-router';

// Create components

const Home = () => (
  <div>
    <h1>Home</h1>
    <Links />
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <Links />
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Links />
  </div>
);


// Create links component to create navigation
// Add Link component for each path and set 'to' property to the path of each component
// Added activeStyle property so that nav ui visually indicates what page user is on


const Links = () =>
  <nav>
    <Link activeClassName= "active" to="/">Home</Link>
    <Link activeClassName= "active" to="/about">About</Link>
    <Link activeClassName= "active" to="/contact">Contact</Link>
  </nav>

class App extends React.Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Home}> </Route>
        <Route path="/about" component={About}> </Route>
          <Route path="/story" component={Story}> </Route>
          <Route path="/team" component={Team}> </Route>
        <Route path="/contact" component={Contact}> </Route>
      </Router>
    );
  }
}

export default App;
