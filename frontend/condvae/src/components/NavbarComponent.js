import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';  // Ensure the correct path to your logo
import '../styles/NavbarComponent.css';

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Function to handle scroll and hide/show navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true); // Scrolling up
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navbar expand="lg" className={`custom-navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <Container>
        <Navbar.Brand href="home" className="d-flex align-items-center">
          <div className="navbar-logo-container">
            <img src={logo} alt="CondVAE-FaceEditor Logo" className="navbar-logo" />
          </div>
          <strong>CondVAE-FaceEditor</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="home" 
              className={activeLink === 'home' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="architecture" 
              className={activeLink === 'architecture' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('architecture')}
            >
              Architecture
            </Nav.Link>
            <Nav.Link 
              href="https://github.com/TejoVK" 
              className={activeLink === 'https://github.com/TejoVK' ? 'nav-link active-link' : 'nav-link'} 
              onClick={() => handleClick('https://github.com/TejoVK')}
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
