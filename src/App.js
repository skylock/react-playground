import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import ConditionalRender from "./components/conditionalRender";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter startIndex={0} /> */}
        <ConditionalRender />
      </div>
    );
  }
}

export default App;
