import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import UserProfile from "./components/userProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter startIndex={0} />
        <UserProfile />
      </div>
    );
  }
}

export default App;
