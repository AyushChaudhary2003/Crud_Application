import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode on the document body and html
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${isDarkMode ? 'dark-mode' : ''}`}
         style={{background: isDarkMode ? 'linear-gradient(135deg, #161b22 0%, #21262d 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className="container-fluid px-4">
        <a 
          className="navbar-brand text-white fw-bold fs-3" 
          href="#"
          style={{textDecoration: 'none'}}
        >
          <i className="fas fa-building me-3"></i>
          Employee Management System
        </a>
        
        <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
          {/* Email Contact */}
          <a 
            href="mailto:ayushiaf.ac@gmail.com" 
            className="text-white me-3"
            title="Send email to Ayush"
            style={{fontSize: '20px', textDecoration: 'none'}}
          >
            <i className="fas fa-envelope"></i>
          </a>
          
          {/* LinkedIn Profile Link */}
          <a 
            href="https://www.linkedin.com/in/ayush-chaudhary-652598259/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white me-3"
            title="Connect with Ayush on LinkedIn"
            style={{fontSize: '20px', textDecoration: 'none'}}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          
          {/* Theme Toggle Button */}
          <button 
            className="btn btn-outline-light me-3"
            onClick={toggleTheme}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{borderRadius: '25px'}}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} me-2`}></i>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
          
          {/* User Info */}
          <div className="nav-item">
            <span className="navbar-text text-white-50">
              <i className="fas fa-user-circle me-2"></i>
              Welcome, Ayush
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
