import React, { Component } from "react";

class I extends Component {
  render() {
    console.log("render called in <I/>");
    return <span className="faint">I </span>;
  }
}

export default I;
