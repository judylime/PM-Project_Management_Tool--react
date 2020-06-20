import React from 'react';
import List from './List';
import data from '../sampleData';

class Board extends React.Component {
  state = {
    currentLists: []
  }
  componentDidMount () {
    this.setState({currentLists:  data.lists })
  }
  createNewList =() => {
    const list ={
      id: Math.random(),
      title: "My amazing list",
      board: 300,
      creatdAt: new Date()
    }
    this.setState({ currentLists: [...this.state.currentLists, list]})
  }
  render() {
    return (
      <div>
        <div className="lists-wrapper">
          <button onClick ={this.createNewList}>New List</button>
          {Object.keys(this.state.currentLists).map(key => (
            <List 
              key = {this.state.currentLists[key].id}
              list={this.state.currentLists[key]} />
          ))}
        </div>
        <form onSubmit ={ this.createNewList}
          className="new-list-wrapper"  >
            <input
            type="text"
            name="name"
            placeholder= " + New List" />
        </form>
      </div>
    )
  }
}

export default Board;