import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeContent from './home-content';
import './Home.css'
import Header from '../../components/Header';
function Home() {
  return (
      <div>
            <div>
      <Header />
    </div>
    <div>
      <HomeContent />
    </div>
    <div className="Footer">
      <p>Made by</p>
    <Container>
      <Row>
        <Col>Rahul</Col>
        <Col>Santhosh</Col>
        <Col>Siddhesh</Col>
      </Row>
      <Row>
        <Col>20BCE1001</Col>
        <Col>20BCE1477</Col>
        <Col>20BCE1448</Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}

export default Home