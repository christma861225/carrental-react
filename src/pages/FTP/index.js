import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/common/Table";
import Preview from "../../components/common/Preview";
import Pageination from "../../components/common/Pageination";
import OutsideClickHandler from "react-outside-click-handler";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import "./index.scss";

const RenderRow = (row) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <tr id={"r_" + row.no}>
      <td>{row.no}</td>
      <td>{row.name}</td>
      <td>{row.ftp}</td>
      <td>{row.username}</td>
      <td>{row.password}</td>
      <td></td>
      <td>
        <div className="action">
          <button className="deleteButton">
            <FaTrashAlt />
          </button>
          <Link
            to="/ftp-edit"
            state={{
              id: row.no,
            }}
          >
            <button className="editButton">
              <FaEdit />
            </button>
          </Link>
        </div>
      </td>
      <td>
        <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
          <span className="relative">
            <Preview open={isOpen} />
            <a className={isOpen ? "blueicon" : ""}>
              <FaEye onClick={() => handleClick(row.no)} />
            </a>
          </span>
        </OutsideClickHandler>
      </td>
    </tr>
  );
};

const FTP = () => {
  const headerCols = [
    "S.no",
    "Names",
    "FTP",
    "Username",
    "Password",
    "File",
    "Action",
    "Processed",
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
    },
  ];

  return (
    <div className="FTP">
      <div className="toolbar">
        <div>
          <p className="title">FTP Links</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </div>
      </div>
      <div className="data-table">
        <Table cols={headerCols} rows={rows} renderRow={RenderRow} />
      </div>
      <Pageination count={101} />
      <div></div>
    </div>
  );
};

export default FTP;
