import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="fw-bold">
                    <Navbar.Brand as={Link} to="/home" className="fw-bold text-dark my-3">TOUR BUDDY</Navbar.Brand>
                    <Navbar.Toggle className=' bg-dark' />
                    <Navbar.Collapse className="justify-content-end text-dark">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home" className="fw-bold text-dark">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home" className="fw-bold text-dark">ORDER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;