import "./Layout.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import React from "react";

const Layout = (props) => {
  return (
    <>
      <div>
        <div>
          <Navigation user={props.user} />
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
