import React, { Component } from "react";

class A extends Component {
  render() {
    console.log("render called in <A/>");
    return <span>a </span>;
  }
}

export default A;
