import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 22,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-secondary m-2">
          {this.getCount()}
        </span>
        <button className="btn btn-primary btn-sm">Increment</button>
      </div>
    );
  }

  getCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
