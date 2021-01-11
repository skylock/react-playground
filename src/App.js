import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
          <Counters />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
