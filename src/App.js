import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/sample-video.mp4" type="video/mp4" />
          <source src="/sample-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="overlay">
        <div className="content">
          <h1 className="coming-soon-text">Coming Soon</h1>
          {/* <p className="subtitle">Something amazing is on the way</p> */}
          {/* <div className="social-links">
            <a href="#" className="social-link">Follow Us</a>
            <a href="#" className="social-link">Get Notified</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App; 