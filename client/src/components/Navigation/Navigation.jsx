import "./Navigation.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";

const authenticatedOptions = (
  <>
    <Nav.Link className="Link" as={Link} to="/add-product">
      Custom Order
    </Nav.Link>
    <Nav.Link className="Link" as={Link} to="/sign-out">
      Sign Out
    </Nav.Link>
  </>
);

const unauthenticatedOptions = (
  <>
    <Nav.Link className="Link" as={Link} to="/sign-up">
      Sign Up
    </Nav.Link>
    <Nav.Link className="Link" as={Link} to="/sign-in">
      Sign In
    </Nav.Link>
  </>
);

const alwaysOptions = (
  <>
    <Nav.Link className="Link" as={Link} to="/productList">
      Products
    </Nav.Link>
  </>
);

const Navigation = ({ user }) => {
  return (
    <>
      <Navbar expand="md" className="nav">
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
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <div className="menu-border">
              <div id="menu">
                <Nav.Link>
                  {user && (
                    <div className="link welcome">Welcome, {user.username}</div>
                  )}
                </Nav.Link>
                <Nav.Link>{alwaysOptions}</Nav.Link>
                <Nav.Link>
                  {user ? authenticatedOptions : unauthenticatedOptions}
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>

    /* <Navbar bg="light" variant="light" expand="sm">
    <Container className="Nav">
          <Nav.Link className="logo" as={Link} to="/">
            <img src="https://i.imgur.com/srxKhf3.png" alt="logo" height="100" width="150" />
          </Nav.Link>
    <Nav className="me-auto">
            <Nav.Link className="links">
              {user && <div className="link welcome">Welcome, {user.username}</div>}

              
              
              <Nav.Link>
        {alwaysOptions}
              </Nav.Link>
        {user ? authenticatedOptions : unauthenticatedOptions}
              </Nav.Link>
      
    </Nav>
    </Container>
    </Navbar> */

    /* <div className="Nav">
      <NavLink className="Logo" to="/"></NavLink>
      <NavLink className="logo" to="/">
        Boom! Roasted
      </NavLink>
      <div className="links">
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div> */
  );
};

export default Navigation;
