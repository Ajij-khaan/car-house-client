import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth'
import './navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="fw-bold">
                    <Navbar.Brand as={Link} to="/home" className="fw-bolder text-white my-3">CAR HOUSE</Navbar.Brand>
                    <Navbar.Toggle className=' bg-dark' />
                    <Navbar.Collapse className="justify-content-end text-dark">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/" className=" fw-bold text-white">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/explorercar" className="fw-bold text-white">EXPLORER CARS</Nav.Link>
                            {user?.email && <Nav.Link as={HashLink} to="/dashboard" className="fw-bold text-white">DASHBOARD</Nav.Link>}
                            {!user?.email && <Nav.Link as={HashLink} to="/login" className="fw-bold text-white">LOGIN</Nav.Link>}
                            {/* <Nav.Link as={HashLink} to="/home" className="fw-bold text-white">ORDER</Nav.Link> */}
                            {/* 

                            {user?.email && <Nav.Link as={HashLink} to="/myorder" className="fw-bold text-white">MyOrder</Nav.Link>}


                            {user?.email && <Nav.Link as={HashLink} to="/addcar" className="fw-bold text-white">AddCar</Nav.Link>}
                            {user?.email && <Nav.Link as={HashLink} to="/addreview" className="fw-bold text-white">AddReview</Nav.Link>}
                            {user?.email && <Nav.Link as={HashLink} to="/manageAllOrder" className="fw-bold text-white">Mange Order</Nav.Link>} */}
                            {
                                user?.email &&
                                <Button className="text-primary btn btn-primary text-white fw-bold rounded-pill px-3" onClick={logOut}>LOGOUT </Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;