import React from 'react';

import './styles/projectcard.css';

const ProjectCard = ({ title, description, techStack, imageSrc, githubLink }) => {
    return (
        <div className="project-card">
            <div className="card-content">
                <div className="card-text">
                    <h3>{title}</h3>
                    <div className="tech-stack">
                        <span>Made with:</span>
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-icon">{tech}</div>
                        ))}
                    </div>
                    <p>{description}</p>
                    <div className="buttons">
                        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">GitHub</a>}
                    </div>
                </div>
                <div className="card-image">
                    <img src={imageSrc} alt={`${title} screenshot`} />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
