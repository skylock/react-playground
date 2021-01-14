import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter startIndex={0} />
        <Counter startIndex={11} />
      </div>
    );
  }
}

export default App;
