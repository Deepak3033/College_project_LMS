import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import Footer from './components/Footr';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <Footer />
                <header className="app-header">
                    <nav className="app-navbar">
                        <Link to="/" className="logo">SAPIENS</Link>
                        <div className="nav-links">
                            <Link to="/components/ContactUs">ContactUs</Link>
                            <Link to="/components/Login">login</Link>
                            <Link to="/components/SignUp">SignUp</Link>
                        </div>
                    </nav>
                </header>
                
                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<ContactUs />} />
                        <Route path="/components/ContactUs" element={<ContactUs />} />
                        <Route path="/components/login" element={<SignIn />} />
                        <Route path="/components/SignUp" element={<SignUp />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
