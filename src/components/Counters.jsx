import React, { Component } from "react";
import Counter4 from "./Counter4";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button className="btn btn-primary btn-sm sm-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter4
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4>Title</h4>
          </Counter4>
        ))}
      </div>
    );
  }
}

export default Counters;
