import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import Table from "../../components/common/Table";
import "./index.scss";

const RenderRow = (row, onClick, active) => {
  return (
    <tr className={active ? "active" : ""} onClick={() => onClick(row.no)}>
      <td>{row.no}</td>
      <td>{row.name}</td>
      <td>{row.username}</td>
      <td>{row.phone}</td>
      <td>{row.email}</td>
      <td>{row.password}</td>
      <td>
        <button className="saveButton">Save</button>
      </td>
    </tr>
  );
};
const Useredit = () => {
  const [selectRow, setSelectRow] = useState();
  const headerCols = [
    "S.no",
    "Names",
    "Username",
    "Phone Number",
    "Email Address",
    "Password",
    "Action",
  ];

  const rows = [
    {
      no: "01",
      name: "Jason Alberto",
      ftp: "file:/example/ideaCourses.png",
      username: "J.alberto48",
      password: "F4sfgsf33",
      phone: "678-226-1270",
      email: "J.48@gmail.com",
      error: true,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "02",
      name: "Micheal B. Jr.",
      ftp: null,
      username: "M.155junior",
      password: "king123",
      phone: "309-293-6260",
      email: "J.48@gmail.com",
      error: true,
      joinDate: "11/5/2022",
      status: "Active",
      active: true,
    },
    {
      no: "03",
      name: "Angelina Elies",
      ftp: "file:/example/ideaCourses.png",
      username: "Angel5965",
      password: "ilovemyfamily",
      phone: "928-287-3370",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "04",
      name: "Jason Alberto",
      ftp: "file:/example/ideaCourses.png",
      username: "J.alberto48",
      password: "F4sfgsf33",
      phone: "810-614-6021",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "05",
      name: "Zailaik Anderson",
      ftp: null,
      username: "Zaikking156",
      password: "F4ed596sf",
      phone: "928-287-3370",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "06",
      name: "Josh Broline",
      ftp: null,
      username: "Thanos4853",
      password: "iron3000",
      phone: "309-293-6260",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "07",
      name: "Jason Alberto",
      ftp: null,
      username: "J.alberto48",
      password: "F4sfgsf33",
      phone: "678-226-1270",
      email: "J.48@gmail.com",
      error: true,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "08",
      name: "Micheal B. Jr.",
      ftp: null,
      username: "J.alberto48",
      password: "king123",
      phone: "309-293-6260",
      email: "J.48@gmail.com",
      error: true,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "09",
      name: "Angelina Elies",
      ftp: null,
      username: "M.155junior",
      password: "ilovemyfamily",
      phone: "928-287-3370",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "10",
      name: "Jason Alberto",
      ftp: "file:/example/ideaCourses.png",
      username: "Angel5965",
      password: "F4sfgsf33",
      phone: "928-287-3370",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "11",
      name: "Zalaik Anderson",
      ftp: "file:/example/ideaCourses.png",
      username: "J.alberto48",
      password: "F4ed596sf",
      phone: "810-614-6021",
      email: "J.48@gmail.com",
      error: true,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "12",
      name: "Josh Broline",
      ftp: "file:/example/ideaCourses.png",
      username: "Zaikking156",
      password: "iron3000",
      phone: "309-293-6260",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "13",
      name: "Zalaik Anderson",
      ftp: "file:/example/ideaCourses.png",
      username: "Thanos4853",
      password: "F4ed596sf",
      phone: "810-614-6021",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
    {
      no: "14",
      name: "Josh Broline",
      ftp: null,
      username: "J.alberto48",
      password: "iron3000",
      phone: "309-293-6260",
      email: "J.48@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
      active: false,
    },
  ];

  const handleRowClick = (id) => {
    setSelectRow(id);
  };

  return (
    <div className="user-edit">
      <div className="toolbar">
        <div>
          <p className="title">User Information</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </div>
        <div>
          <Button>
            <Link to={"/user-profile"}>+ Profile</Link>
          </Button>
        </div>
      </div>
      <Table
        cols={headerCols}
        rows={rows}
        renderRow={RenderRow}
        selectRow={selectRow}
        onClickRow={handleRowClick}
      />
    </div>
  );
};

export default Useredit;
