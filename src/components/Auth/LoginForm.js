import React, { useState, useEffect } from 'react';
import ImageGallery from '../image-gallery/ImageGallery';
import './auth.css';
import { css } from '@emotion/react'; // Import css from react-spinners
import { RingLoader } from 'react-spinners'; // Import RingLoader from react-spinners

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleLogin = () => {
    if (email === 'user@example.com' && password === '1Password') {
      // Set loading to true after successful login
      setIsLoading(true);

      // Simulate loading for 2 seconds (adjust as needed)
      setTimeout(() => {
        setAuthenticated(true);
        setIsLoading(false); // Turn off loading after delay
      }, 2000);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  useEffect(() => {
    if (authenticated) {
      // Redirect to the gallery after successful login
      setTimeout(() => {
        // Redirect logic here (e.g., using React Router)
        // For now, simply log a message
        console.log('Redirecting to the gallery...');
      }, 1000); // Redirect after 1 second (adjust as needed)
    }
  }, [authenticated]);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

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
          {isLoading && (
            <div className="loader">
              <RingLoader color={'#007bff'} loading={isLoading} css={override} size={100} />
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
