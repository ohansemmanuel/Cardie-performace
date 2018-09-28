import React, { PureComponent } from "react";

class Profession extends PureComponent {
  render() {
    console.log("render called in <Profession/>");
    return <span> {this.props.profession} </span>;
  }
}

export default Profession;
