import React, { Component } from "react";

class Counter4 extends Component {
  
  componentDidUpdate(prevpPops, prevState) {
    console.log("prevPros", prevProps);
    console.log("prevState", prevState);

    if (prevpPops.counter.value !== this.props.counter) {
      //Ajax call as the data has been changed
    }
  }

  //called up before component is being removed
  componentWillMount() {
    console.log("Counter - componentWillMount");
  }

  render() {
    //console.log("Props", this.props);
    console.log("Counter4 - rendered");

    let classes = this.getBadgeClass();

    return (
      <div>
        {this.props.children}
        <span className={classes}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h3>Zero</h3> : value;
  }
}

export default Counter4;
