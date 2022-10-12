import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        // <div className='header'>
        //     <div className="site-name">
        //         <Link to='/home'><h2>Hero Quiz</h2></Link>
        //     </div>
        //     <div className="nav">
        //         <NavLink className={({isActive})=> isActive? 'active' : undefined } to='/home'>Home</NavLink>
        //         <NavLink to='/topics'>Topics</NavLink>
        //         <NavLink to='/statistics'>Statistics</NavLink>
        //         <NavLink to='/blog'>Blog</NavLink>
        //     </div>
        // </div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/home' className="site-name"><h2>Hero Quiz</h2></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            {/* <Nav.Link><NavLink to='/topics'>Topics</NavLink></Nav.Link> */}
            <Nav.Link><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/topics'>Topics</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/statistics'>Statistics</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/blog'>Blog</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;