import "./Navigation.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Container from "react-bootstrap/Container";



const authenticatedOptions = (
  <>
    <div className='auth-menu'>
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
    <div className='unauth-menu'>
    <Nav.Link className="Link" as={Link} to="/sign-up">
      Sign Up
    </Nav.Link>
    <Nav.Link className="Link" as={Link} to="/sign-in">
      Sign In
      </Nav.Link>
    </div>
  </>
);

const alwaysOptions = (
  <>
    <div className='both-menu'>
    <Nav.Link className="Link" as={Link} to="/productList">
      Products
      </Nav.Link>
      </div>
  </>
);

const Navigation = ({ user }) => {
  return (
    <>
    <div>

      <Navbar expand="md" className="nav">
        {/* <Container> */}
        <div className="logo-home">

    <div className="nav-border">
      <Navbar
        expand="sm"
        id="nav">
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

        

        {/* <Navbar.Collapse>
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
        </Navbar.Collapse> */}
        {/* </Container> */}
      </Navbar>
    </div>

            

          
          </div>
          
          
          <Navbar.Collapse>

            <Nav>
            <Nav.Link>
             
              {user && <div className="link welcome">Welcome, {user.username}</div>}

              

              
              
              </Nav.Link>
              <Nav.Link>

        {alwaysOptions}
              </Nav.Link>
              <Nav.Link>

        {user ? authenticatedOptions : unauthenticatedOptions}
              </Nav.Link>
              
            </Nav>
            </Navbar.Collapse>
        {/* </Container> */}
        </Navbar>
        </div>
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
