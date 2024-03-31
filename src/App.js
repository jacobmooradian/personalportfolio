import React from 'react';
import Header from './components/header';
import ExperienceCard from './components/experienceCard';
import ProjectCard from './components/projectCard';

import portrait from './assets/pictures/portrait-jt.jpg'
import climformaticsIcon from './assets/icons/climformaticsIcon.jpg';
import TradeViewImage from './assets/images/TradeViewIcon.webp';
import CSBETSDOTCOMIMAGE from './assets/images/CSBETSDOTCOM.png';
import SuffixTreeImage from './assets/images/SuffixTreeImage.png';
import SimplWeatherImage from './assets/images/SimplWeatherImage.jpg';
import './app.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="name-header">
        <h1>Jacob Mooradian</h1>
      </div>
      <div class="portrait-container">
        <img src={portrait} alt="Jacob Mooradian" class="portrait"/>
      </div>
      <div className="introduction">
        <h1>Hello there!</h1>
        <p>
          I'm Jacob, a software engineer and a current student at the 
          University of California, Riverside studying computer science.
        </p>
        <p>
          I am currently seeking full-time entry level positions after my graduation
          in June 2024. Please reach out via <a href="mailto:jacobmooradian@gmail.com" class="email-link">email</a> or
          connect with me on LinkedIn if you would like
          to see my resume.
        </p>
      </div>
      <div className="container">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Currently, I have been working with Python and C++ to build software engineering projects. I enjoy machine learning
            and using libraries such as TensorFlow and PyTorch.
          </p>
          <p>
          I have experience
            developing web applications with React. 
            I am learning other web development frameworks
            such as Vue.js and Angular to expand my frontend development capabilities.
          </p>
          <p>
          I have gained experience in managing databases on AWS and currently expanding into Azure.
          </p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
            <ExperienceCard
              icon={climformaticsIcon}
              title="Software Engineer and Data Intern"
              description={"Developed a fullstack web application for Best Day 2 Marry project"}
              />
        </div>
      </div>
      <div className="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            <ProjectCard
              image={TradeViewImage}
              description="A stock paper trading application that employs financial algorithms for predictions"
            ></ProjectCard>
            <ProjectCard
              image={CSBETSDOTCOMIMAGE}
              description="A full-stack web application of gambling games related to Counter Strike"
              ></ProjectCard>
              <ProjectCard
              image={SuffixTreeImage}
              description="Working implementation of Ukkonen's algorithm to construct suffix trees in linear time"
              ></ProjectCard>
              <ProjectCard
              image={SimplWeatherImage}
              description="A web application that fetches daily forecast and informs users what type of clothes to wear"
              ></ProjectCard>
          </div>
        </div>

    </div>
  );
}

export default App;
