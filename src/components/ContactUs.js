import React from 'react';
import './ContactUs.css';

function ContactUs() {
    return (
        <div className="contact-page">
            <nav className="navbar">
                <div className="logo">SAPIENS</div>
                <div className="nav-links">
                    <a href="/components/ContactUs">ContactUs</a>
                    <a href="/components/Login">Login</a>
                    <a href="/components/SignUp">SignUp</a>
                </div>
            </nav>
            <div className="contact-container">
                <header>
                    <h1>ContactUs</h1>
                    <p>Our Staff is ready to help you!</p>
                </header>
                <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <textarea placeholder="Comment / Question"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
