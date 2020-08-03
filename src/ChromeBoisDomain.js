import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  toggle = () => {
    toggleCycling()
  }

  keyPress = (e) => {
    if (e.key == 'a')
      resize('+')
    else
      resize('-')
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.toggle}
        onKeyPress={this.keyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}