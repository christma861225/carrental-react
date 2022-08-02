import React from "react";
import Button from "../../components/common/Button";
import Dot from "../../components/common/Dot";
import Table from "../../components/common/Table";
import UserEngagement from "../../components/UserEngagement";
import ActiveRatio from "../../components/ActiveRatio";
import TrashIcon from "../../assets/images/icons/trash.svg";
import EditIcon from "../../assets/images/icons/edit.svg";
import "./index.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const RenderRow = (row) => {
  return (
    <tr>
      <td>{row.no}</td>
      <td>{row.name}</td>
      <td>{row.ftp}</td>
      <td>{row.username}</td>
      <td>{row.password}</td>
      <td>{row.phone}</td>
      <td>{row.email}</td>
      <td>
        <Dot status={row.error} />
      </td>
      <td>{row.joinDate}</td>
      <td>{row.status}</td>
      <td>
        <div className="action">
          <button className="deleteButton">
            <FaTrashAlt />
          </button>
          <Link
            to="/user-edit"
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
    </tr>
  );
};

const Dashboard = () => {
  const headerCols = [
    "S.no",
    "Names",
    "FTP",
    "Username",
    "Password",
    "Phone Number",
    "Email Address",
    "Error Report",
    "Join Date",
    "Status",
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
      email: "J.alberto@gmail.com",
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
      email: "J.alberto@gmail.com",
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
      email: "J.alberto@gmail.com",
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
      email: "J.alberto@gmail.com",
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
      email: "J.alberto@gmail.com",
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
      email: "J.alberto@gmail.com",
      error: false,
      joinDate: "11/5/2022",
      status: "Active",
    },
  ];

  return (
    <div className="dashboard">
      <p className="title">Welcome Back, Nathan</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et
      </p>
      <div className="charts">
        <div className="userengagement">
          <UserEngagement />
        </div>
        <div className="activeratio">
          <ActiveRatio />
        </div>
      </div>
      <div className="user-information">
        <div className="toolbar">
          <div>
            <p className="title">User Information</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
          </div>
          <Button>
            <Link to="/user">View All</Link>
          </Button>
        </div>
        <Table cols={headerCols} rows={rows} renderRow={RenderRow} />
      </div>
    </div>
  );
};

export default Dashboard;
