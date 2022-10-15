import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='bg-info'>
                <Container className=''>
                    <Navbar.Brand className='text-white text-decoration-none fw-semibold ' to="/">Navbar</Navbar.Brand>
                    <Nav className="me-5  gap-5 ">
                        <Link className='text-white text-decoration-none fw-semibold' to="/">Home</Link>
                        <Link className='text-white text-decoration-none fw-semibold' to="/login">Log in</Link>
                        <Link className='text-white text-decoration-none fw-semibold' to="/register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;