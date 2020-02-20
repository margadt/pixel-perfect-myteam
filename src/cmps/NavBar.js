import React from 'react';
import logo from '../styles/images/logo.svg';
import hamburger from '../styles/images/icon-hamburger.svg';

const NavBar = _ => {
    return <header className="flex space-between align-center">
        <div className="header-left-side flex align-center">
            <img src={logo} alt='logo' />
            <div className="menu flex">
                <p>home</p>
                <p>about</p>
            </div>
        </div>
        <div className="btn flex justify-center align-center"><p>contact us</p></div>
        <img className="hamburger" src={hamburger} alt="hamburger" />
    </header>;
}

export default NavBar;