import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class MainNav extends Component {
  state = {
    isActive: false,
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">History Is Watching Us</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Privacy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
