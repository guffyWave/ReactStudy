import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length == 0)
      return <p>There are no elemnts to show </p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag !"}
        {this.renderTags()}
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter2;
