import React from 'react';
import linkedInIcon from '../assets/icons/linkedIn.webp';
import handshakeIcon from '../assets/icons/HandshakeIcon.png';
import githubIcon from '../assets/icons/GithubIcon.png';

import './header.css';

function Header() {
  return (
    <header>
        <div className="line before"></div>
        <div className="icons-container">
            <nav>
                <ul>
                <li>
                    <a href="https://www.linkedin.com/in/jacob-mooradian-2406511b3/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInIcon} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://ucr.joinhandshake.com/stu/users/18203664" target="_blank" rel="noopener noreferrer">
                    <img src={handshakeIcon} alt="Handshake" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jacobmooradian" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                    </a>
                </li>
                </ul>
            </nav>
        </div>
        <div className="line after"></div>
    </header>
  );
}

export default Header;