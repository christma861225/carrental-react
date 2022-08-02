import React from "react";
import SearchIcon from "../../../assets/images/icons/search.png";
import Avatar from "../../../assets/images/user.png";
import "./index.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search">
        <input type="search" placeholder="Search..." />
        <img src={SearchIcon} />
      </div>
      <div className="avatar">
        <img src={Avatar} />
      </div>
    </div>
  );
};

export default Topbar;
