import React from 'react';
import Board from './Board';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

class BoardPreview extends React.Component {
  goToBoard = () => {
    const boardId = this.props.board.id
    this.props.histery.push ({
      pathname:`/board/${boardId}`
    })
  }
  render ( ) {
    return (
      <ul
      className="board-preview-item" 
      onClick={this.goToBoard}
      style={{backgroundColor:this.props.board.background}}
      >
        <li>{this.props.board.title} </li>
      </ul>
    )
  }
}

BoardPreview.propTypes ={
  board: PropTypes.object.isRequired
}
export default withRouter(BoardPreview)