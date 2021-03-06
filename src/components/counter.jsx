import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log("Increment clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  getCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
