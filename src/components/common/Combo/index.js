import React from "react";
import Form  from "react-bootstrap/Form";
import "./index.scss";

const Combo = ({ children, onClick = () => {} }) => {
  return (
    <div className="combo">
      <Form.Select aria-label="Default select example">
        <option>Select File</option>
        <option value="1">file:/example/ideaCourses.png</option>
        <option value="2">file:/example/ideaCourses.png</option>
        <option value="3">file:/example/ideaCourses.png</option>
        <option value="3">file:/example/ideaCourses.png</option>
        <option value="3">file:/example/ideaCourses.png</option>
        <option value="3">file:/example/ideaCourses.png</option>
      </Form.Select>
    </div>
  );
};

export default Combo;
