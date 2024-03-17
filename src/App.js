// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const imageElement = document.querySelector('.full-screen-image');
    if (imageElement) {
      if (isLoading) {
        imageElement.classList.remove('show');
      } else {
        imageElement.addEventListener('transitionend', handleTransitionEnd);
      }
    }
  }, [isLoading]);

  const handleTransitionEnd = () => {
    const imageElement = document.querySelector('.full-screen-image');
    if (imageElement) {
      imageElement.remove();
    }
  };

  return (
    <div className="app">
      <div className={`loading-screen ${isLoading ? 'loading' : ''}`}>
        <div className={`full-screen-image ${!isLoading ? 'show' : ''}`}></div>
      </div>
      <div className={`home-screen ${!isLoading ? 'show' : ''}`}>
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
