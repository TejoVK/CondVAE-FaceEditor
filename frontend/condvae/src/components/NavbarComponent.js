import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';  // Ensure the correct path to your logo
import '../styles/NavbarComponent.css';

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div className="navbar-logo-container">
            <img src={logo} alt="CondVAE-FaceEditor Logo" className="navbar-logo" />
          </div>
          <strong>CondVAE-FaceEditor</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#home" 
              className={activeLink === 'home' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#architecture" 
              className={activeLink === 'architecture' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('architecture')}
            >
              Architecture
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeLink === 'about' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('about')}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
