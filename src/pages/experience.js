import React from "react";
import ExperienceCard from '../components/experienceCard';
import { FaPython, FaAws, FaReact } from 'react-icons/fa';
import './styles/experience.css';

const Experience = () => {
    const jobs = [
        {
            companyName: "Climformatics",
            dateRange: "Oct 2023 - April 2024",
            techStack: [<FaPython />, <FaAws />, <FaReact />],
            description: "Developed a full-stack application for a weather-based software as a service.",
            logoSrc: "https://raw.githubusercontent.com/jacobmooradian/personalportfolio/master/src/assets/icons/climformaticsIcon.jpg"
        },
    ];

    return (
        <div className="experience-section">
            <h1>My Experience</h1>
            {jobs.map((job, index) => (
                <ExperienceCard
                    key={index}
                    companyName={job.companyName}
                    dateRange={job.dateRange}
                    techStack={job.techStack}
                    description={job.description}
                    logoSrc={job.logoSrc}
                />
            ))}
        </div>
    );
}

export default Experience;