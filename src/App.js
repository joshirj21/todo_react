import React from 'react';
import './App.css';
import Todolist from "./Todolist"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Todolist />
      </div>
    )
  }
}

export default App;
