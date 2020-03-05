import React from 'react';
import logo from '../styles/images/logo.svg';
import hamburger from '../styles/images/icon-hamburger.svg';

const NavBar = (props) => {
    const toggleModal = _ => {
        props.setToggleMobMenu(!props.toggleMobMenu);
    }
    return <header className="flex space-between align-center container">
        <div className="header-left-side flex align-center">
            <img src={logo} alt='logo' />
            <div className="menu flex">
                <p>home</p>
                <p>about</p>
            </div>
        </div>
        <div className="btn flex justify-center align-center"><p>contact us</p></div>
        <img className="hamburger" src={hamburger} alt="hamburger" onClick={toggleModal} />
    </header>;
}

export default NavBar;