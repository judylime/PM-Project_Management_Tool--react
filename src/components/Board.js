import React from 'react';
import List from './List';
import Data from '../sampleData';
import data from '../sampleData';

class Board extends React.Component {
  state = {
    currentLists: []
  }
  componentDidMount () {
    this.setState({currentLists:  data.lists })
  }
  render() {
    return (
      <div className="lists-wrapper">
        <p>{this.props.board.title} </p>

      </div>
    )
  }
}

export default Board;