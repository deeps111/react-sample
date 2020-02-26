import React, { Component } from "react";
import Child from "../Child/Child";

class RenderPropsIssue extends Component {
  state = {
    obj: { name: "Deepa" },
    arr: [1, 2]
  };

  render() {
    return (
      <div>
        <Child content={this.state.obj.name}></Child>
        <Child
          content1={this.state.arr.map(item => (
            <li key={item}>{item}</li>
          ))}
        ></Child>
      </div>
    );
  }
}

export default RenderPropsIssue;
