import React from "react";
import { connect } from "react-redux";
import I from "./I";
import Am from "./Am";
import A from "./A";
import Profession from "./Profession";

const Description = ({ description }) => {
  return (
    <p>
      <I />
      <Am />
      <A />
      <Profession profession={description} />
    </p>
  );
};

const mapStateToProps = state => ({
  description: state.description
});

export default connect(
  mapStateToProps,
  null
)(Description);
