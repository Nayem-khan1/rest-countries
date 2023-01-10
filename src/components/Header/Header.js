import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.webp';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav'>
                    <NavLink to='/home' className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
                    <NavLink to='/countries'>All Countries</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;