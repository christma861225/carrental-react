import React from "react";
import Table from "../components/common/Table";
import Pageination from "../components/common/Pageination";

const RenderRow = (row) => {
  
  return (
    <tr>
      <td>{row.incharge}</td>
      <td>{row.user}</td>
      <td>{row.username}</td>
      <td>{row.password}</td>
      <td>{row.error}</td>
      <td>{row.screenshot}</td>
    </tr>
  );
};

const ErrorReporting = () => {

  const headerCols = [
    "Incharge",
    "User",
    "Username",
    "Password",
    "Error Messages",
    "Screenshot Image",
  ];

  const rows = [
    {
      incharge: "Jason Alberto",
      user: "Jason Alberto",
      username: "J.alberto48",
      password: "F4sfgsf33",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Micheal B. Jr.",
      user: "Micheal B. Jr.",
      username: "M.155junior",
      password: "king123",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Angelina Elies",
      user: "Angelina Elies",
      username: "Angel5965",
      password: "ilovemyfamily",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Jason Alberto",
      user: "Jason Alberto",
      username: "J.alberto48",
      password: "F4sfgsf33",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Zailaik Anderson",
      user: "Zailaik Anderson",
      username: "Zaikking156",
      password: "F4ed596sf",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Josh Broline",
      user: "Josh Broline",
      username: "Thanos4853",
      password: "iron3000",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Jason Alberto",
      user: "Jason Alberto",
      username: "J.alberto48",
      password: "F4sfgsf33",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Micheal B. Jr.",
      user: "Micheal B. Jr.",
      username: "J.alberto48",
      password: "king123",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Angelina Elies",
      user: "Angelina Elies",
      username: "M.155junior",
      password: "ilovemyfamily",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Jason Alberto",
      user: "Jason Alberto",
      username: "Angel5965",
      password: "F4sfgsf33",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Zalaik Anderson",
      user: "Zalaik Anderson",
      username: "J.alberto48",
      password: "F4ed596sf",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Josh Broline",
      user: "Josh Broline",
      username: "Zaikking156",
      password: "iron3000",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Zalaik Anderson",
      user: "Zalaik Anderson",
      username: "Thanos4853",
      password: "F4ed596sf",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
    {
      incharge: "Josh Broline",
      user: "Josh Broline",
      username: "J.alberto48",
      password: "iron3000",
      error: "Lorem ipsum dolor sit amet, const. see more",
      screenshot: "file://Users/example/Screenshot%20Courses.png",
    },
  ];

  return (
    <div className="FTP">
      <div className="toolbar">
        <div>
          <p className="title">Error Report</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna<br /> aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </div>
      </div>
      <Table cols={headerCols} rows={rows} renderRow={RenderRow} />
      <Pageination count={101} />
      <div></div>
    </div>
  );
};

export default ErrorReporting;