import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signup-page">
            <nav className="navbar">
                <div className="logo">SAPIENS</div>
                <div className="nav-links">
                <a href="/components/ContactUs">ContactUs</a>
                    <a href="/components/Login">Login</a>
                    <a href="/components/SignUp">Signup</a>
                </div>
            </nav>
            <div className="signup-container">
                <header>
                    <h1>Register with SAPIENS</h1>
                    <p>Your library catalog is available anywhere, anytime.</p>
                </header>
                <form className="signup-form">
                    <fieldset className="account-info">
                        <legend>Account Information:</legend>
                        <div className="form-row">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="E-mail" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-row">
                            <select>
                                <option>Brasil (Padrão)</option>
                                <option>Portugal</option>
                                <option>Estados Unidos</option>
                                <option>Outro</option>
                            </select>
                        </div>
                    </fieldset>
                    <button type="submit">Start my library</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
