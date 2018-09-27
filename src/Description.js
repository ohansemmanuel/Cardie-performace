import React from "react";
import { connect } from "react-redux";

const Description = ({ description }) => {
  return (
    <p>
      {" "}
      <span className="faint">I am</span> a {description}
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
