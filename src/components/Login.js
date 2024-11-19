import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-page">
            <nav className="navbar">
                <div className="logo">SAPIENS</div>
                <div className="nav-links">
                <a href="/components/ContactUs">ContactUs</a>
                    <a href="/components/Login">Login</a>
                    <a href="/components/SignUp">SignUp</a>
                </div>
            </nav>
            <div className="login-container">
                <header>
                    <h1>Log In:</h1>
                </header>
                <form className="login-form">
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <div className="checkbox-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember-me
                        </label>
                        <a href="#" className="forgot-link">Forget?</a>
                    </div>
                    <button type="submit">Log In</button>
                </form>
                <p className="signup-prompt">
                    Don't have account? <a href="#" className="signup-link">SignUp!</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
