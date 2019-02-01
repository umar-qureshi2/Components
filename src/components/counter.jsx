import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [] // ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return "There are no tags!";

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && <p>Please create a new tag</p>}
        {/* <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button className="btn btn-primary btn-sm">Increment</button> */
        this.renderTags()}
      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classes = " badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   getCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
