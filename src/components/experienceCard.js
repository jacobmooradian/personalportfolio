import React from 'react';

import './experienceCard.css';

function experienceCard({ icon, title, description }) {
    return (
        <div className="experience-card">
            <img src={icon} alt="Company Icon" className="company-icon" />
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default experienceCard;