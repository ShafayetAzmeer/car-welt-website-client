import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const {user, logout} = useAuth();

    return (
        <> 
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg"> 
                <Container>
                <Navbar.Brand className="fs-1 fw-bolder" href="#home">Car Welt</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home" className="text-light fs-5 fw-bold">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#products" className="text-light fs-5 fw-bold">Products</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#showRooms" className="text-light fs-5 fw-bold">Showrooms</Nav.Link>
                             
                    <Nav.Link as={Link} to="/explore" className="text-light fs-5 fw-bold">Explore</Nav.Link>
                    

                    {   user?.email &&
                        <Nav.Link as={Link} to="/dashboard" className="text-light fs-5 fw-bold"> Dashboard</Nav.Link>
                    }

                    {   user?.email ?
                        <Button onClick={logout} variant="light" className="fs-5 fw-bold">Logout</Button>:
                        <Nav.Link as={Link} to="/login" className="text-light fs-5 fw-bold">Log in</Nav.Link>
                    }
                    {   user.email &&
                        <Navbar.Text>
                        <span className="text-light px-3 fs-5 fw-bold"> Signed in  as </span>  <a style={{textDecoration: 'none' }} href="#register" className="fs-5 fw-bold"> {user?.displayName}</a>
                        </Navbar.Text>}
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
    );
};

export default Header;