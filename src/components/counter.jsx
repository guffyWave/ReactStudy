import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBadgeClass();

    return (
      <React.Fragment>
        <span className={classes}>This is Nice </span>

        {/* <span>Helllo there {this.state.count}</span>
        <br />
        <span>{2 + 2}</span>
        <br />
        <span>Count is {this.formatCount()}</span>
        <br />
        <button>Increment</button>
        <br />
        <img src={this.state.imageUrl} alt="" />
        <br />
        <span className="badge badge-primary m-2">This is Nice </span>
        <br />
        <button className="btn btn-secondary btn-sm">Click me</button>
        <br />
        <span style={this.styles} className="badge badge-primary m-2">
          Apple is red and sky is blue
        </span>

        <br />
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          This is a normal text
        </span> */}
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
