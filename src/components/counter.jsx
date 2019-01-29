import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageSource: "https://picsum.photos/200"
  };
  render() {
    return (
      <div>
        <img src={this.state.imageSource} alt="random image" />
        <span>{this.getCount()}}</span>
        <button>Increment</button>
      </div>
    );
  }

  getCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
