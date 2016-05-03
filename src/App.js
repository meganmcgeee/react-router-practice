// Import react to so the app can use it
import React from 'react';
// Import react-router components and objects needed for project.
import {Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

// Create components

const Outer = () => (
  <div>
    <h1>Our Site</h1>
    <Links />
  </div>
);

const About = (props) => (
  <div>
    <h1>About</h1>
    <Links />
    {props.children}
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
    <p> I can tell you all about my powerful team of natural born leaders here.</p>
  </div>
);

// Add about component

const Story = (props) => (
  <div>
    <h1>Story</h1>
    <p> This is the story that I am writing to explain how I got here and how a lot of us got here.</p>
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
        <Route path="/" component={Home} />
        <Route path="about" component={About}>
          <Route path="story" component={Story} />
          <Route path="team" component={Team} />
        </Route>
        <Route path="contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
