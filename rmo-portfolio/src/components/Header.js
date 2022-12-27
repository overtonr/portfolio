import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(props) {
  return (
    <span>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#about"
                onClick={() => props.handlePageChange("About")}
                className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>about me</Nav.Link>
              <Nav.Link href="#portfolio"
                onClick={() => props.handlePageChange("Portfolio")}
                className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>portfolio</Nav.Link>
              <Nav.Link href="#contact"
                onClick={() => props.handlePageChange("Contact")}
                className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>contact</Nav.Link>
              <Nav.Link href="#resume"
                onClick={() => props.handlePageChange("Resume")}
                className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}>resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </span>
  );
};

export default Header;