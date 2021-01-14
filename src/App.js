import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my react app !</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
