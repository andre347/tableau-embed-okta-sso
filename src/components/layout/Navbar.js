import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import GithubIcon from "../helper/github.svg";

const github = {
  height: "38px",
  marginLeft: "20px",
  cursor: "pointer"
};

function NavBar({ user, auth, authenticated }) {
  return (
    <Navbar fixed="top" className="bg-dark bg-transparent" variant="dark">
      <Navbar.Brand href="#home">Okta Auth Portal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Users</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a className="mr-sm-2" href="#login">
            {user ? `Signed in as: ${user.given_name}` : "Not Logged In"}
          </a>
          <Button
            onClick={() => (authenticated ? auth.logout() : auth.login())}
            variant={user ? "outline-danger" : "outline-success"}
          >
            {user ? "Logout" : "Login"}
          </Button>
          <a href="https://github.com/andre347" target="_blank" rel="noopener noreferrer">
            <img style={github} src={GithubIcon} alt="github logo" />
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
