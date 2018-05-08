import React, { Component } from 'react';
import Die from './Die'

class Dice extends Component {
  render() {
    return (
      <div>
        <Die dieSides={10}/>
        <Die dieSides={20}/>
      </div>
    );
  }
}

export default Dice;