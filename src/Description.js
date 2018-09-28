import React, { Component } from "react";
import { connect } from "react-redux";
import I from "./I";
import Am from "./Am";
import A from "./A";
import Profession from "./Profession";

class Description extends Component {
  i = {
    value: "i"
  };

  render() {
    return (
      <p>
        <I i={this.i} />
        <Am />
        <A />
        <Profession profession={this.props.description} />
      </p>
    );
  }
}

const mapStateToProps = state => ({
  description: state.description
});

export default connect(
  mapStateToProps,
  null
)(Description);
