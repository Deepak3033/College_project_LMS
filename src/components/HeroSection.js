import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section">
            <header className="hero-header">
                <h1>Cloud Cataloging</h1>
                <p>Catalog your Books, Movies, Music, and Video Games in one place.</p>
                <button>Get Started</button>
            </header>
            <img src="hero.png" alt="Hero" className="hero-image" />
        </div>
    );
}

export default HeroSection;
