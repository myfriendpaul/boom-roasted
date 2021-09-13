import "./NavBar.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="Link" to="/productCreate">
      Custom Order
    </NavLink>
    <NavLink className="Link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="Link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="Link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="Link" to="/products">
      Products
    </NavLink>
  </>
);
const NavBar = () => {
  return (
    <div className="Nav">
      <NavLink className="Logo" to="/"></NavLink>
      <NavLink className="logo" to="/">
        ProductsApp
      </NavLink>
      {/* <div className="links">
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div> */}
    </div>
  );
};

export default NavBar;
