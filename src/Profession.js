import React, { Component } from "react";

class Profession extends Component {
  render() {
    console.log("render called in <Profession/>");
    return <span> {this.props.profession} </span>;
  }
}

export default Profession;
