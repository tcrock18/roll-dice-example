import React, { Component } from 'react';


class Die extends Component {
    state = {
      roll: 0
    };


  clickHandler = () => {
    const sides = this.props.dieSides;
    this.setState({roll: Math.ceil(Math.random() * sides)})
  };

  render() {
    return (
      <div>
        <h1>Roll Dice</h1>
        <p>{this.state.roll}</p>
        <p>Die Sides: {this.props.dieSides}</p>
        <button onClick={this.clickHandler} >Click Me</button>
      </div>
    );
  }
}

export default Die;