import React, { Component } from 'react';
import './App.css';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Alexander Jacks's web app portfolio
          </h1>
          <p className="font-bold black-text">
            I'll spare you from looking at <code>code</code> and link you right to the projects.
          </p>
        </header>
        <Projects/>
      </div>
    );
  }
}

export default App;
