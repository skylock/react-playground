import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="image"></img>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zarro" : count;
  }
}

export default Counter;
