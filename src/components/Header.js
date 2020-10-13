import React from 'react';
import Navbar from './Navbar';
import './components.css';

const Header = () => {
    return (
        <div className="wrapper">
            <div className="site-name">
               #WithNature
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;