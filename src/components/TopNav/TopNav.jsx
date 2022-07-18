/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./TopNav.css";

function TopNav() {
  return (
    <>
      <Navbar ms-auto expand="lg" className="navBar">
        <Container>
          <Navbar.Brand href="/" className="brand">
            اردو ادب
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbarCollapse">
            <Nav className="nav">
              <Nav.Link href="/poetry" className="navLink">
                شاعری
              </Nav.Link>
              <Nav.Link href="/books" className="navLink">
                کتابیں
              </Nav.Link>
              <Nav.Link href="/poets" className="navLink">
                شاعر
              </Nav.Link>
            </Nav>
            <Form className="form">
              <Form.Control
                type="search"
                placeholder="تلاش کیجیے"
                className="search"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
