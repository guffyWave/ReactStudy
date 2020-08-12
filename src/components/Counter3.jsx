import React, { Component } from "react";

class Counter3 extends Component {
  state = {
    value: this.props.counter.value,
  };

  // constructor() {
  //   super();
  //   console.log("Constructor called ", this);
  //   //reseting the method in the claas while seeting the current class object
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }   
  handleIncrement() {
    console.log("Increment Clicked", this);
  }

  handleIncrementArrow = (product) => {
    console.log("Increment Clicked", this);
    console.log(product);
    // this.state.count++; // This will not work
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrementArrow({ id: 1 });
  };

  render() {
    console.log("Props", this.props);

    let classes = this.getBadgeClass();

    return (
      <div>
        {this.props.children}
        <span className={classes}> {this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrementArrow({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h3>Zero</h3> : count;
  }
}

export default Counter3;
