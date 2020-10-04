import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import Logo from "../../../logos/Group 1329.png";
const NavBar = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img src={Logo} style={{ height: "50px" }} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" variant="dark">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/donation">Donation</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/event">Event</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/register">
              {loggedInUser.email ? (
                <Button variant="primary" style={{ display: "none" }}>
                  Register
                </Button>
              ) : (
                <Button variant="primary">Register</Button>
              )}
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          {loggedInUser.email ? (
            <h4>{loggedInUser.name}</h4>
          ) : (
            <Link to="/admin">
              <Button variant="secondary">Admin</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
