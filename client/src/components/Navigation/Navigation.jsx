import "./Navigation.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";

const authenticatedOptions = (
  <>
    <div className="auth-menu">
      <Nav.Link className="Link" as={Link} to="/add-product">
        Custom Order
      </Nav.Link>
      <Nav.Link className="Link" as={Link} to="/sign-out">
        Sign Out
      </Nav.Link>
    </div>
  </>
);

const unauthenticatedOptions = (
  <>
    <div className="unauth-menu">
      <Nav.Link className="Link" as={Link} to="/sign-up">
        Sign Up
      </Nav.Link>
      <br />
      <Nav.Link className="Link" as={Link} to="/sign-in">
        Sign In
      </Nav.Link>
    </div>
  </>
);

const alwaysOptions = (
  <>
    <div className="both-menu">
      <Nav.Link className="Link" as={Link} to="/productList">
        Products
      </Nav.Link>
    </div>
  </>
);

const Navigation = ({ user }) => {
  return (
    <>
      <div className="nav-border">
        <Navbar
          expand="lg
        "
          id="nav"
        >
          {/* <Container> */}
          <div className="logo-home">
            <Nav.Link as={Link} to="/">
              <img
                src="https://i.imgur.com/srxKhf3.png"
                alt="logo"
                height="100"
                width="150"
              />
            </Nav.Link>

            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            <Nav>
              <div className="nav-links-andy">
                <Nav.Link>
                  {user && (
                    <div className="welcome-user">
                      Welcome, {user.username}!
                    </div>
                  )}
                </Nav.Link>
                <Nav.Link>{alwaysOptions}</Nav.Link>

                <Nav.Link>
                  {user ? authenticatedOptions : unauthenticatedOptions}
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
