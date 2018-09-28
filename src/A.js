import React, { PureComponent } from "react";

class A extends PureComponent {
  render() {
    console.log("render called in <A/>");
    return <span>a </span>;
  }
}

export default A;
