import React, { useState } from 'react';
import './LoginRegister.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginRegister() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/register', { name, email, password })
      .then(res => {
        console.log(res);
        handleSignInClick();
      })
      .catch(err => console.log(err));
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/login', { email: loginEmail, password: loginPassword })
      .then(res => {
        console.log(res);
        if (res.data === 'Login successful') {
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" onSubmit={handleLoginSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, QCY Owner!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
