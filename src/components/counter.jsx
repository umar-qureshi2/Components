import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={{ fontSize: 22 }} className={classes}>
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
