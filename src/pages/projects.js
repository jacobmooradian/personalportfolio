import React from 'react';
import ProjectCard from '../components/projectcard';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiPostman, SiJupyter } from 'react-icons/si';
import './styles/projects.css';

const Projects = () => {
    const projects = [
        {
            title: "TradeView",
            description: "Stock prediction using various financial models tailored to predicing stock movement. Built using Python, PostgresSQL and React.js",
            techStack: [<FaReact />, <SiPostgresql />, <FaPython />],
            imageSrc: "https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/images/TradeViewIcon.webp",
            githubLink: "http://github-link.com"
        },

        {
            title: "CSBETSDOTCOM",
            description: "Mock gambling website based on popular PC game Counterstrike. Working in a team of 4, I contributed by building a PostgreSQL database and constructing the backend using Express.js. I built a fully comprehensive testing suite using Jest and Supertest, along with Postman to ensure significant test coverage.",
            techStack: [<FaReact />, <SiPostgresql />, <SiExpress />, <SiPostman />],
            imageSrc: "https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/images/CSBETSDOTCOM.png",
            githubLink: "http://github-link.com"
        },

        {
            title: "Suffix Tree Construction with Ukkonen's Algorithm",
            description: "Developed a Python implementation of Ukkonen's Algorithm to construct suffix trees for pattern matching, detecting substrings, etc. I used JupyterLab to demonstrate and perform analyses on running times and performance using matplotlib.",
            techStack: [<FaPython />, <SiJupyter />],
            imageSrc: "https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/images/SuffixTreeImage.png",
            githubLink: "http://github-link.com"
        },

        {
            title: "SimplWeather",
            description: "Built a full-stack application to fetch daily forecasts and suggest clothing to wear for the day. Utilized Python, Flask, and React.js.",
            techStack: [<FaPython />, <FaReact />],
            imageSrc: "https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/images/SimplWeatherImage.jpg",
            githubLink: "http://github-link.com"
        }
        
    ];

    return (
        <div className='projects-container'>
            <h1>My Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    imageSrc={project.imageSrc}
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    );
}

export default Projects;
