import "./Layout.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navigation user={props.user} />
        </div>
        <div className="layout-children">
          <Link to="/productList/id">{props.children}</Link>
        </div>
      </div>
    </>
  );
};

export default Layout;
