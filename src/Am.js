import React, { PureComponent } from "react";

class Am extends PureComponent {
  render() {
    console.log("render called in <Am/>");
    return <span className="faint">am </span>;
  }
}

export default Am;
