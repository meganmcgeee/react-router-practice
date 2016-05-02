// Import react to so the app can use it
import React from 'react';
// Import react-router components and objects needed for project.
import {Router, Route, Link, hashHistory } from 'react-router';

// Create components

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
  </div>
)

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
)


// Create links component to create navigation

const Links = () =>
  <nav>
  </nav>

class App extends React.Component {
  render(){
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}> </Route>
        <Route path="/about" component={About}> </Route>
        <Route path="/contact" component={Contact}> </Route>
      </Router>
    );
  }
}

export default App;
