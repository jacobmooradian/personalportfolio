import React from "react";
import './styles/about.css';
import {
    FaPython, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaDocker, FaNodeJs
} from 'react-icons/fa';
import { SiCplusplus, SiPostgresql, SiMongodb, SiExpress, SiDjango, SiBootstrap, SiJupyter, SiPostman, SiMicrosoftsqlserver } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-main">
                <div className="about-image">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*YZ2fsT9k1CmlMil-Fda0Zg.png" alt="Workspace"/>
                </div>
                <div className="about-text">
                    <h1>About Me</h1>
                    <h2>Software Engineer and Computer Science student based in Riverside, California 📍</h2>
                    <p>Hey, my name is Jacob, and I'm a current undergraduate Computer Science student at the University of California, Riverside.
                        I am set to graduate in June 2024.
                    </p>
                    <p>I am an aspiring Software Engineer seeking entry-level positions either remotely or in the San Francisco Bay Area.</p>
                    <p>My goal is to apply my knowledge to design and build software for any range of problems or applications.</p>
                    <p>I am especially interested in machine learning, bioinformatics, and entertainment-related applications.</p>
                </div>
            </div>
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-grid">
                    <div className="skill-icon"><FaPython /><p>Python</p></div>
                    <div className="skill-icon"><FaJsSquare /><p>JavaScript</p></div>
                    <div className="skill-icon"><FaReact /><p>React</p></div>
                    <div className="skill-icon"><FaHtml5 /><p>HTML</p></div>
                    <div className="skill-icon"><FaCss3Alt /><p>CSS</p></div>
                    <div className="skill-icon"><SiCplusplus /><p>C++</p></div>
                    <div className="skill-icon"><FaAws /><p>AWS</p></div>
                    <div className="skill-icon"><FaGitAlt /><p>Git</p></div>
                    <div className="skill-icon"><FaDocker /><p>Docker</p></div>
                    <div className="skill-icon"><SiPostgresql /><p>PostgreSQL</p></div>
                    <div className="skill-icon"><SiMongodb /><p>MongoDB</p></div>
                    <div className="skill-icon"><SiExpress /><p>Express.js</p></div>
                    <div className="skill-icon"><FaNodeJs /><p>Node.js</p></div>
                    <div className="skill-icon"><SiDjango /><p>Django</p></div>
                    <div className="skill-icon"><SiBootstrap /><p>Bootstrap</p></div>
                    <div className="skill-icon"><SiJupyter /><p>Jupyter</p></div>
                    <div className="skill-icon"><SiPostman /><p>Postman</p></div>
                    <div className="skill-icon"><DiMysql /><p>MySQL</p></div>
                    <div className="skill-icon"><SiMicrosoftsqlserver /><p>SQL Server</p></div>
                 </div>
            </div>
            <div className="education-container">
                <h2>My Education</h2>
                <div className="education-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/UC_Riverside_Highlanders_logo.svg/1200px-UC_Riverside_Highlanders_logo.svg.png" alt="UCR Logo" className="education-logo"/>
                    <div>
                        <h3>Bachelor of Computer Science</h3>
                        <p>University of California, Riverside</p>
                        <p>Expected June 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;