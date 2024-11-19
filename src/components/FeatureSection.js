import React from 'react';
import './FeatureSection.css';

function FeaturesSection() {
    return (
        <div className="features-section">
            <div className="feature">
                <h2>Create, Manage, and Share Collections</h2>
                <p>Easily organize and share your collections with automated data updates.</p>
                <button>Explore</button>
            </div>
            <div className="feature">
                <h2>Automatic Data for Books, Movies, and More</h2>
                <p>Get detailed data automatically from trusted databases.</p>
                <img src="/path/to/feature-image.png" alt="Feature" />
            </div>
            <div className="feature">
                <h2>Sync Across Devices</h2>
                <p>Access your collections anywhere with cloud synchronization.</p>
            </div>
        </div>
    );
}

export default FeaturesSection;
