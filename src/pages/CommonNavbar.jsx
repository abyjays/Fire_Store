import { useState } from "react";
import { Link } from "react-router-dom";

export default function CommonNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="nav-brand-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
          <Link to="/" className="nav-brand">FireStore</Link>
        </div>

        <div className="nav-desktop">
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="nav-links">
            <Link to="/login" className="nav-link highlight">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </div>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Home</Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link highlight">Login</Link>
          <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link">Register</Link>
        </div>
      )}
    </nav>
  );
}