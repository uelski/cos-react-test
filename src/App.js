import React, { Component } from 'react';
import './App.css';
import Test from './Test.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mason Cos</h1>
          <Test />
        </header>
      </div>
    );
  }
}

export default App;
