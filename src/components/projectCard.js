import React from 'react';

import './projectCard.css';

function ProjectCard({ image, description }) {
    return (
        <div className="project-card">
            <img src={image} alt="Project" className="project-image"/>
            <p className="project-description">{description}</p>
        </div>
    );
}

export default ProjectCard;
