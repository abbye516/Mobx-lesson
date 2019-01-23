import React, { Component } from 'react';
import './App.css'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  updateLocation = (e) => {
    let location = prompt('Please enter updated location')
    this.props.store.updateLocation(e.target.value, location)
  }
  deleteItem = (e) =>{
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <DevTools />
        {this.props.store.list.map(i => {
          return <div key={i.name}>
            <input type="checkbox"
              onClick={this.checkItem}
              value={i.name} />
            {i.completed ? <s>{i.name}</s> : <span>{i.name}-{i.location}</span>}
            <button value={i.name} onClick={this.updateLocation}>edit</button>
            <button value={i.name} onClick={this.deleteItem}>Delete</button>
          </div>
        }
        )}
      </div>
    );
  }
}

export default App;