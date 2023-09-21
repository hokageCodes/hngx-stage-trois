import React, { useState } from 'react';
import ImageGallery from '../image-gallery/ImageGallery';
import './auth.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (email === 'user@example.com' && password === '1Password') {
      setAuthenticated(true);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-form-container">
      {authenticated ? (
        <div>
          <h2>Welcome, May The Force Be With You</h2>
          <ImageGallery />
        </div>
      ) : (
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
