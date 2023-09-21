import React, { useState } from 'react';
import LoginForm from './components/Auth/LoginForm';
import ImageGallery from './components/image-gallery/ImageGallery';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <div className="App">
      {authenticated ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <ImageGallery />
        </div>
      ) : (
        <LoginForm onAuthenticate={handleAuthentication} />
      )}
    </div>
  );
}

export default App;
