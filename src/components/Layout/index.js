import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./index.scss";

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Topbar />
          <div className="page">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
