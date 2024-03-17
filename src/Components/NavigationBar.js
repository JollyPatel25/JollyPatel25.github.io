// NavigationBar.js
import React from 'react';
import '../css/NavigationBarCss.css'; // Import CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item nav-left">
          <a href="/" className="nav-link">Jolly Patel</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/education" className="nav-link">Education</a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link">Projects</a>
        </li>
        <li className="nav-item">
          <a href="/experience" className="nav-link">Experience</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

