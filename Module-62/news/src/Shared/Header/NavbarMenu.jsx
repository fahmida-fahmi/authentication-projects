import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Context';

const NavbarMenu = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Navbar expand="lg" className="">
                <Container fluid className='px-0'>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Nav
                            className="mx-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action1">About</Nav.Link>
                            <Nav.Link href="#action1">Career</Nav.Link>
                            
                        </Nav>
                        <Nav className='flex items-center'>
                            <Nav.Link href="#deets">{
                                user && 
                                {user}
                            }</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='px-0'>
                            <Link to='/login' className='nav-link bg-dark text-white px-3'>Log in</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarMenu;