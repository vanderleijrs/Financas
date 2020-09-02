import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

function NavbarTeste(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Boutique</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#login">Cadastro</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarTeste