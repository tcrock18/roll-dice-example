import React, { Component } from 'react';
import Dice from './RollGame/Dice'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dice/>
      </div>
    );
  }
}

export default App;
