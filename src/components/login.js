// LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';
import '/Users/bharathmahesh/webstorm/untitled/src/login.css'; // Import the CSS file

const LoginPage = ({ handleLogin }) => {
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__background">
                    <div className="screen__background__shape screen__background__shape1"></div>
                    <div className="screen__background__shape screen__background__shape2"></div>
                    <div className="screen__background__shape screen__background__shape3"></div>
                    <div className="screen__background__shape screen__background__shape4"></div>
                </div>
                <div className="screen__content">
                    <div className="login">
                        <h1 className="login__title">Login</h1>
                        <LoginForm handleLogin={handleLogin} />
                        <div className="social-login">
                            <div className="social-icons">
                                <a href="#" className="social-login__icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-login__icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-login__icon"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
