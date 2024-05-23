import React from 'react';
import { Link } from 'react-scroll';
import "./styles/navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-title">Jacob's Portfolio</div>
                <ul>
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
