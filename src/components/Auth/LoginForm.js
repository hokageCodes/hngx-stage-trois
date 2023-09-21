import React, { useState, useEffect } from 'react';
import ImageGallery from '../image-gallery/ImageGallery';
import './auth.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleLogin = () => {
    if (email === 'user@example.com' && password === '1Password') {
      setIsLoading(true);

      // Simulate loading for 2 seconds (adjust as needed)
      setTimeout(() => {
        setAuthenticated(true);
        setIsLoading(false);
      }, 2000);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  useEffect(() => {
    if (authenticated) {
      setTimeout(() => {
        console.log('Redirecting to the gallery...');
      }, 3000);
    }
  }, [authenticated]);

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
            <button className='login-btn' type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
          {isLoading && <p>Loading...</p>} {/* Show loading message when isLoading is true */}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
