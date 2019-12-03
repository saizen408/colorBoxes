import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: [
      '#5AFF15',
      '#7CFEF0',
      '#E40066',
      '#D741A7',
      '#E7E247',
      '#541388',
      '#EE4266',
      '#F2AF29',
      '#FF8811',
      '#55DDE0'
    ]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
