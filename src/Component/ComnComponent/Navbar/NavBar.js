import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../../App";
import Logo from "../../../logos/Group 1329.png";
const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <img src={Logo} style={{ height: "50px" }} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" variant="dark">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/donation">Domnation</Nav.Link>
          <Nav.Link href="/event">Event</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link>
        </Nav>
        <Nav>
          {loggedInUser.email ? (
            <h4>{loggedInUser.name}</h4>
          ) : (
            <Button>Admin</Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
