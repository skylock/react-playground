import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <div>
        <Counters></Counters>
      </div>
    );
  }
}

export default App;
