import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="font-italic lime-text">
            This portfolio spares you from looking at <code>code</code> and links you right to the projects.
          </p>
          <Projects/>
        </header>
      </div>
    );
  }
}

export default App;
