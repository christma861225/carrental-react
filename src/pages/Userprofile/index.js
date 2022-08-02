import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Dot from "../../components/common/Dot";
import Table from "../../components/common/Table";
import Carlist from "../../components/common/Carlist";
import Avatar from "../../assets/images/avatar.png";
import ActiveEye from "../../assets/images/icons/active-eye.svg";
import InActiveEye from "../../assets/images/icons/inactive-eye.svg";
import activePending from "../../assets/images/icons/active-pending.svg";
import InactivePending from "../../assets/images/icons/inactive-pending.svg";
import activeCruise from "../../assets/images/icons/active-cruise.svg";
import InactiveCruise from "../../assets/images/icons/inactive-cruise.svg";
import activeDelete from "../../assets/images/icons/active-delete.svg";
import InactiveDelete from "../../assets/images/icons/inactive-delete.svg";
import DotGreen from "../../assets/images/icons/dot-green.svg";
import DotYellow from "../../assets/images/icons/dot-yellow.svg";
import DotRed from "../../assets/images/icons/dot-red.svg";
// get our fontawesome imports
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./index.scss";

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
      <td>
        <Dot status={row.status === "Active" ? false : true} />
        {row.status}
      </td>
      <td>
        <div className="action">
          <button className="deleteButton">
            <FaTrashAlt />
          </button>
          <Link
            to="/user-edit"
            status={{
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

const Userprofile = () => {
  const [activeTab, setActiveTab] = useState("active");
  const handleClick = (id) => {
    setActiveTab(id);
  };
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
  ];

  const tabs = [
    {
      id: "active",
      label: "Active",
      icon: {
        active: ActiveEye,
        inactive: InActiveEye,
      },
      status: true,
      dot: DotGreen,
    },
    {
      id: "pending",
      label: "Pending",
      icon: {
        active: activePending,
        inactive: InactivePending,
      },
      status: false,
      dot: DotYellow,
    },
    {
      id: "cruise",
      label: "Cruise",
      icon: {
        active: activeCruise,
        inactive: InactiveCruise,
      },
      status: false,
      dot: false,
    },
    {
      id: "delete",
      label: "Deleted Data",
      icon: {
        active: activeDelete,
        inactive: InactiveDelete,
      },
      status: false,
      dot: DotRed,
    },
  ];

  return (
    <div className="user-profile">
      <div className="toolbar1">
        <div className="avatar">
          <img src={Avatar} />
        </div>
        <div>
          <div className="title">
            <div>
              <p>Neon Dealership</p>
            </div>
            <div>
              <button className="deleteButton">
                <FaTrashAlt />
              </button>
              <button className="editButton">
                <FaEdit />
              </button>
            </div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
          </div>
        </div>
      </div>
      <table className="info-table">
        <thead>
          <tr>
            <td style={{ width: "15%" }}>First Name:</td>
            <td style={{ width: "15%" }}>xxxxxxxxx</td>
            <td style={{ width: "15%" }}>Last Name:</td>
            <td style={{ width: "15%" }}>xxxxxxxxxx</td>
            <td style={{ width: "15%" }}>Username:</td>
            <td>xxxxxxxxx</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email Address:</td>
            <td>xxxxxxxxx</td>
            <td>Password:</td>
            <td>xxxxxxxxxx</td>
            <td>Website URL:</td>
            <td>xxxxxxxxx</td>
          </tr>
          <tr>
            <td>Phone Number:</td>
            <td>xxxxxxxxx</td>
            <td>Address:</td>
            <td colSpan="3">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>xxxxxxxxx</td>
            <td>status:</td>
            <td>xxxxxxxxxx</td>
            <td>ZIP Code:</td>
            <td>xxxxxxxxx</td>
          </tr>
        </tbody>
      </table>
      <div className="toolbar2">
        <div>
          <p className="title">Users</p>
        </div>
        <div>
          <Button>
            <Link to={"/user-profile"}>+ Profile</Link>
          </Button>
        </div>
      </div>
      <Table cols={headerCols} rows={rows} renderRow={RenderRow} />
      <ul className="tabbar">
        <div>
          {tabs.map((tab) => {
            return (
              <li
                className={
                  tab.id === activeTab ? "tabitem active" : "tabitem"
                }
                key={tab.id}
                onClick={() => handleClick(tab.id)}
              >
                <div className="icon-container">
                  <img
                    src={
                      tab.id === activeTab
                        ? tab.icon.active
                        : tab.icon.inactive
                    }
                  />
                </div>
                <div
                  className="label"
                  style={{
                    color: tab.id === activeTab ? "#000" : "#B0B0B0",
                  }}
                >
                  {tab.label}
                </div>
                <div className="dot-container">
                  {tab.dot && <img src={tab.dot} />}
                </div>
              </li>
            );
          })}
        </div>
      </ul>
      <Carlist></Carlist>
    </div>
  );
};

export default Userprofile;
