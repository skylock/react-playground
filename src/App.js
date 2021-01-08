import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
