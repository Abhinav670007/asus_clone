import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home"><img src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png" alt="no image" width={'70px'}className='me-3' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto w-100 justify-content-between">
            <Nav.Link  href="#home">Mobile/ <br />brands</Nav.Link>
            <Nav.Link  href="#link">Laptops</Nav.Link>
            <Nav.Link  href="#home">Desktop/ <br />Displays</Nav.Link>
            <Nav.Link  href="#home">Motherboard/ <br />Components</Nav.Link>
            <Nav.Link  href="#home">Networkung/ <br />Services</Nav.Link>
            <Nav.Link  href="#link">Accessories</Nav.Link>
            <Nav.Link  href="#home">BBuisness/ <br />Peripherals</Nav.Link>
            <Nav.Link  href="#link">Support</Nav.Link>
          </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header