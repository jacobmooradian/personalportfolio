import React from 'react';

import './styles/experiencecard.css';

const ExperienceCard = ({ companyName, dateRange, techStack, description, logoSrc }) => {
    return (
        <div className="experience-card">
            <div className="card-content">
                <div className="card-text">
                    <h3>{companyName}</h3>
                    <h4>{dateRange}</h4>
                    <div className="tech-stack">
                        <span>Tech Stack:</span>
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-icon">{tech}</div>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
                <div className="card-image">
                    <img src={logoSrc} alt={`${companyName} logo`} />
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;