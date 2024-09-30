import React, { useState } from "react";
import './Accordion.css'; // Add styles for the layout

const Accordion = () => {
    const [selectedAccordion, setSelectedAccordion] = useState(null);

    // Toggle the accordion by setting the selected one
    const toggleAccordion = (index) => {
        setSelectedAccordion(selectedAccordion === index ? null : index);
    };

    return (
        <div className="accordion-wrapper">
            <div className="accordion-list">
                <div className="accordion-item" onClick={() => toggleAccordion(1)}>
                    <h3>Report a Claim</h3>
                </div>
                <div className="accordion-item" onClick={() => toggleAccordion(2)}>
                    <h3>Consultation Services</h3>
                </div>
                <div className="accordion-item" onClick={() => toggleAccordion(3)}>
                    <h3>Insurance Policies</h3>
                </div>
            </div>

            {/* Content Panel */}
            <div className="accordion-content-panel">
                {selectedAccordion === 1 && (
                    <div className="accordion-content">
                        <h4>Report a Claim</h4>
                        <p>Fill out the form to report an insurance claim.</p>
                    </div>
                )}
                {selectedAccordion === 2 && (
                    <div className="accordion-content">
                        <h4>Consultation Services</h4>
                        <p>We offer expert consultation on various insurance policies.</p>
                    </div>
                )}
                {selectedAccordion === 3 && (
                    <div className="accordion-content">
                        <h4>Insurance Policies</h4>
                        <p>Explore different insurance policies tailored to your needs.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;