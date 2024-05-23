import React from 'react';
import './styles/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero-section">
                <section className="hero-main">
                    <div className="hero-text">
                        <h1>Software Engineer 👨‍💻</h1>
                        <p>Hi, I'm Jacob Mooradian. A soon to be computer science new grad based in Riverside, California. 📍 I also like cats.</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/jacob-mooradian-2406511b3/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://github.com/jacobmooradian" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src='https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/pictures/portrait-jt.jpg' alt="Jacob Mooradian's Portrait" />
                    </div>
                </section>
            </header>
                <div class="cat-container">
                    <div class="shadow"></div>
                    <div class="cat">
                        <div class="ear"></div>
                        <div class="eye"></div>
                        <div class="mouth"></div>
                        <div class="nose"></div>
                        <div class="tail"></div>
                        <div class="body"></div>
                        <div class="bubble"></div>
                    </div>
                </div>
            </div>
    );
}

export default Home;
