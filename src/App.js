import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/Counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 9 },
      { id: 3, value: -5 },
      { id: 4, value: 4 },
    ],
  };

  constructor() {
    super();
    console.log("App - constructor ");
    // this
  }

  componentDidMount() {
    console.log("App - mounted");
    //perfect for ajax call
    //this.setState({movies})
  }

  // constructor(props) {
  //   super(props);
  //   console.log("App- constructor ");
  // }

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Event Handler clalled", counterId);
    console.log("This", this);
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
