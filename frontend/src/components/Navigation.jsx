
import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">ParkScape</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></Nav.Link>
            <Nav.Link href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</Link></Nav.Link>
            <Nav.Link href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/parks">Parks</Link></Nav.Link>
            <Nav.Link href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/cities">Cities</Link></Nav.Link>
            <Nav.Link href="#home"><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/airports">Airports</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;