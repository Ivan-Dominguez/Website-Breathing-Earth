import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import './components.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <hr id="line-before"/>
            <Dropdown text="HOME" icon="" as={Link} to='/home'/>
            <Dropdown text="ABOUT" icon="" as={Link} to='/about' simple>
                <Dropdown.Menu>
                    <Dropdown.Item text="About" as={Link} to='/about'/>
                    <Dropdown.Item text="Team"as={Link} to='/team'/>
                    <Dropdown.Item text="Contact Us"as={Link} to='/contact'/>
                    </Dropdown.Menu>  
            </Dropdown>
            <Dropdown text="PROJECTS" icon="" simple>
                <Dropdown.Menu>
                    <Dropdown.Item text="Our Story Forest" as={Link} to='/forest'/>
                    <Dropdown.Item text="Breath With Nature" as={Link} to='/breath'/>
                    <Dropdown.Item text="Little Seeds" as={Link} to='/seeds'/>
                </Dropdown.Menu>  
            </Dropdown>
            <Dropdown text="NATURE BASED THERAPY" icon=""/>
            <Dropdown text="TAKE ACTION" icon="" simple>
                <Dropdown.Menu>
                    <Dropdown.Item text="Action Projects" as={Link} to='/forest'/>
                    <Dropdown.Item text="Share Your Story" as={Link} to='/breath'/>
                    <Dropdown.Item text="Donate" as={Link} to='/seeds'/>
                    <Dropdown.Item text="Join Us" as={Link} to='/seeds'/>
                </Dropdown.Menu>  
            </Dropdown>
            <Dropdown text="BLOG" icon="" as={Link} to='/blog'/>
           <hr id="line-after"/>
        </div>
    );
};

export default Navbar; 