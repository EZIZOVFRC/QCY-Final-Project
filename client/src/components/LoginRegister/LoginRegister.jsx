import React, { useState } from 'react';
import './LoginRegister.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
  const [registerError, setRegisterError] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setRegisterError('All fields are required.');
      return;
    }
    axios.post('http://localhost:8080/api/register', { name, email, password })
      .then(res => {
        console.log(res);
        setRegisterError('');
        handleSignInClick();
      })
      .catch(err => {
        console.log(err);
        setRegisterError('An error occurred during registration.');
      });
  };

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError('Both email and password are required.');
      return;
    }
    axios.post('http://localhost:8080/api/login', { email: loginEmail, password: loginPassword })
      .then(res => {
        console.log(res);
        if (res.data === 'Login successful') {
          localStorage.setItem("user", JSON.stringify(res.data.user));  // Kullanıcı bilgilerini kaydet
          navigate('/');
        } else {
          setLoginError('Invalid email or password.');
        }
      })
      .catch(err => {
        console.log(err);
        setLoginError('An error occurred during login.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Login/Register</title>
      </Helmet>
      <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={handleRegisterSubmit}>
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            {registerError && <p className="error">{registerError}</p>}
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
            {loginError && <p className="error">{loginError}</p>}
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
    </>
  );
}

export default LoginRegister;
