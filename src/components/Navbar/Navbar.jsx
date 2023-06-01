import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">Home</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
