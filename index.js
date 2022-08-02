import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Logout from "../../../assets/images/logout.svg";
import ActiveHome from "../../../assets/images/icons/active-home.svg";
import InactiveHome from "../../../assets/images/icons/inactive-home.svg";
import ActiveUser from "../../../assets/images/icons/active-user.svg";
import InactiveUser from "../../../assets/images/icons/inactive-user.svg";
import ActiveFTP from "../../../assets/images/icons/active-ftp.svg";
import InactiveFTP from "../../../assets/images/icons/inactive-ftp.svg";
import ActiveError from "../../../assets/images/icons/active-error.svg";
import InactiveError from "../../../assets/images/icons/inactive-error.svg";
import "./index.scss";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    {
      id: "dashboard",
      label: "Home",
      path: "/",
      icon: {
        active: ActiveHome,
        inactive: InactiveHome,
      },
      active: false
    },
    {
      id: "user",
      label: "Users",
      path: "/user",
      icon: {
        active: ActiveUser,
        inactive: InactiveUser,
      },
      active: false
    },
    {
      id: "ftp",
      label: "FTP",
      path: "/ftp",
      icon: {
        active: ActiveFTP,
        inactive: InactiveFTP,
      },
      active: false
    },
    {
      id: "error",
      label: "Error Report",
      path: "/error",
      icon: {
        active: ActiveError,
        inactive: InactiveError,
      },
      active: false
    },
  ];

  const handleRedirect = (path) => {
    navigate(path);
  };

  const setActive = (param) => {
    switch(param) {
      case '/':
      case '/dashboard':
          routes[0].active= true;
        break;
      case '/ftp':
        routes[2].active= true;
        break;
      case '/error':
        routes[3].active= true;
        break;
      default:
        routes[1].active= true;
        break;
    }
  }
  setActive(location.pathname)
  return (
    <div className="sidebar">
      <img src={Logo} className="logo" />
      <ul>
        {
        routes.map((route) => {
          return (
            <li
              className="link"
              key={route.id}
              onClick={() => handleRedirect(route.path)}
            >
              <div className="icon-container">
                {route.active && <div className="bg" />}
                <img src={route.active ? route.icon.active : route.icon.inactive} />
              </div>
              <span style={{ color: route.active ? "#2F83EB" : "#313131" }}>
                {route.label}
              </span>
            </li>
          );
        })}
      </ul>
      <img src={Logout} className="logout" />
      <div className="version">V.1.2.4</div>
    </div>
  );
};

export default Sidebar;
