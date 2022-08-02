import React from "react";
import "./index.scss";

const Preview = ({ open = false, val = "", onClick = () => {} }) => {
  const handleClick = () => {
    onClick();
  };
  if (!open) return;
  
  return (
    <div className="preview">
      <div>
        <button onClick={handleClick}>
          <i className="fa fa-file"></i>
          View File
        </button>
      </div>
      <div>
        <label>XXXXXXXXXXXXXXX</label>
      </div>
    </div>
  );
};

export default Preview;
