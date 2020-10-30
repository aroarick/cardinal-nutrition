import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

import "../../App.scss";

function Navigation() {
  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="/">Cardinal Nutrition</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/something">something</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link className="menu-button" href="/menu">
              Menu
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
