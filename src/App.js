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

const About = (props) => (
  <div>
    <h1>About</h1>
    <Links />
    {props.child}
  </div>

);

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Links />
  </div>
);

// Add Team component

const Team = (props) => (
  <div>
    <h1>Team</h1>
    <Links />
    {props.child}
  </div>
);

// Add about component

const Story = (props) => (
  <div>
    <h1>Story</h1>
    <Links />
    {props.child}
  </div>
);


// Create links component to create navigation
// Add Link component for each path and set 'to' property to the path of each component
// Added activeStyle property so that nav ui visually indicates what page user is on


const Links = () =>
  <nav>
    <Link activeClassName= "active" to="/">Home</Link>
    <Link activeClassName= "active" to="/about">About</Link>
      <Link activeClassName= "active" to="/about/story">Story</Link>
      <Link activeClassName= "active" to="/about/team">Team</Link>
    <Link activeClassName= "active" to="/contact">Contact</Link>

  </nav>

class App extends React.Component {
  render(){
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Home}> </Route>
        <Route path="/about" component={About}> </Route>
        <Route path="/contact" component={Contact}> </Route>
          <Route path="/about/story" component={Story}> </Route>
          <Route path="/about/team" component={Team}> </Route>

      </Router>
    );
  }
}

export default App;
