import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function Header() {
  return (
    <div>
      <Navbar className='nab' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mintify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <div className='jk'>
          <Nav className="me-auto">
            <Nav.Link href="/Home" className="link">Home</Nav.Link>
            <Nav.Link href="/consent" className="link">Consent</Nav.Link>
            <Nav.Link href="/loan" className="link">Loan Application</Nav.Link>
            <Nav.Link href="/logout" className="link">Logout</Nav.Link>
            <Nav.Link href="#profile" className="link">Profile</Nav.Link>
          
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
