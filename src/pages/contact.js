import React from "react";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./styles/contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <h3>Feel free to reach out! <span role="img" aria-label="wave">👋</span></h3>
            <div className="contact-info">
                <div className="contact-item">
                    <FaEnvelope size={32} />
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:jacobmooradian@gmail.com" target="_blank" rel="noopener noreferrer">jacobmooradian@gmail.com</a></p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaLinkedin size={32} />
                    <div>
                        <h4>LinkedIn</h4>
                        <p><a href="https://www.linkedin.com/in/jacob-mooradian-2406511b3/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jacobmooradian</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;