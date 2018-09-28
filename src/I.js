import React, { PureComponent } from "react";

class I extends PureComponent {
  render() {
    console.log("render called in <I/>");
    return <span className="faint">{this.props.i.value} </span>;
  }
}

export default I;
