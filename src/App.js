import React, { Component } from 'react';
import Grocery from './Grocery'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: []
    }
  }

  addGrocery = (grocery) => {
    this.setState({ groceries: [...this.state.groceries, grocery]})
  }

  render() {
    return (
      <div className="App">
        <h1>The Grocery List</h1>
        <Grocery 
          className="grocery" 
          name="bananas" 
          starred={false}
        />
      </div>
    );
  }
}

export default App;
