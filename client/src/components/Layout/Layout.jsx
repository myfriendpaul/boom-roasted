import "./Layout.css";
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom"

import React from "react";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <NavBar user={props.user} />
        </div>
        <div className="layout-children">
          <Link to="/product-info/id">
          {props.children}
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Layout;
