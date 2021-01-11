import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { counters, onIncrement, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            selected={true}
            onIncrement={onIncrement}
            onDelete={onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
