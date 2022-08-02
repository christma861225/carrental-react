import React from "react";
import "./index.scss";

const Dot = ({ status }) => {
  return (
    <span
      className="dot"
      style={{ background: status ? "#E14848" : "#44D971" }}
    />
  );
};

export default Dot;
