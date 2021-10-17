import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import { Nav,NavDropdown,Navbar,Container } from 'react-bootstrap'
function Manu() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link> <Link to="/" > Home</Link></Nav.Link>

    
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to="/contact" > Contact Us</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/director" > Director Message</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/management" > Management Desk</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/principal" > Principal's Message</Link></NavDropdown.Item>
   
        
      </NavDropdown>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to="/adp" > Admission procedure</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/director" > Director Message</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/team" > Our Team</Link></NavDropdown.Item>

   
        
      </NavDropdown>


      <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
      <Nav.Link> <Link  to="/contact" > Contact Us</Link></Nav.Link>
      <Nav.Link> <Link  to="/login" > Login</Link></Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Manu
