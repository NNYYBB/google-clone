// App.js
import React from 'react';
import { 
  Mic, 
  Search, 
  Camera, 
  Grid 
} from 'lucide-react';
import './App.css';

const GoogleHomepage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <nav className="header-nav">
          <a href="#" className="header-link">Gmail</a>
          <a href="#" className="header-link">Images</a>
          <button className="apps-button">
            <Grid size={20} />
          </button>
          <button className="profile-button">E</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="logo-container">
          <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="Google Logo"
            className="logo"
          />
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
            />
            <div className="search-buttons">
              <button className="icon-button">
                <Mic size={20} />
              </button>
              <button className="icon-button">
                <Camera size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Action Buttons */}
        <div className="action-buttons">
          <button className="action-button">Google Search</button>
          <button className="action-button">I'm Feeling Lucky</button>
        </div>

        {/* Language Options */}
        <div className="language-options">
          <span className="language-text">Google offered in: </span>
          {['Hausa', 'Akan', 'Ewe', 'Ga'].map((lang, index) => (
            <React.Fragment key={lang}>
              <a href="#" className="language-link">{lang}</a>
              {index < 3 && <span className="language-separator">·</span>}
            </React.Fragment>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-country">
          Ghana
        </div>
        <div className="footer-links">
          <div className="footer-links-left">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Advertising</a>
            <a href="#" className="footer-link">Business</a>
            <a href="#" className="footer-link">How Search works</a>
          </div>
          <div className="footer-links-right">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleHomepage;