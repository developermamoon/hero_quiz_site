import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="site-name">
                <Link to='/home'><h2>Hero Quiz</h2></Link>
            </div>
            <div className="nav">
                <NavLink className={({isActive})=> isActive? 'active' : undefined } to='/home'>Home</NavLink>
                <NavLink to='/topics'>Topics</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;