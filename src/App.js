import React, { Component } from 'react';
import './assets/App.css';
import Nav from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
